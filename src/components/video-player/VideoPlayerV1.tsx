import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import ReactPlayer from "react-player";
import ModalQuiz from "../modal/ModalQuiz";
import Toast from "../toast/Toast";

import { SaveScoreToSessionStorage } from "@/helper/SaveScoreToSessionStorage";
import { quizTestPost } from "@/data/quizTestPost";
import {
  QuestionVideoInterface,
  VideoTimeInterface,
  ScoreProps,
} from "@/types/types";

const VideoPlayer = ({
  contentVideo,
}: {
  contentVideo: QuestionVideoInterface | null;
}) => {
  const pathname = usePathname();

  const videoRef = useRef<ReactPlayer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDomLoad, setIsDomLoad] = useState(false);
  const [studentScore, setStudentScore] = useState<ScoreProps[]>([]);
  const [responseSubmitQuiz, setResponseSubmitQuiz] = useState("");

  const handleTimeUpdate = (e: VideoTimeInterface) => {
    setCurrentTime(e.playedSeconds);
  };

  const addScore = (point: ScoreProps) => {
    setStudentScore((prevScores) => [...prevScores, point]);
  };

  useEffect(() => {
    if (!isDomLoad) {
      setIsDomLoad(true);
    }

    if (isDomLoad && contentVideo) {
      const currentQuestion = contentVideo.questions.find((question) => {
        return (
          currentTime >= question.second && currentTime <= question.second + 1
        );
      });

      if (currentQuestion?.id! > studentScore.length) {
        // Pause video otomatis
        if (videoRef.current) {
          videoRef.current.seekTo(currentQuestion?.second!, "seconds");
          videoRef.current.getInternalPlayer().pauseVideo();
          setIsPlaying(false);
        }

        // Tampilkan modal dengan pertanyaan dari currentQuestion
        setIsOpenModal(true);
      }
    }
  }, [currentTime, isPlaying, contentVideo, studentScore, isDomLoad]);

  // Function for save final score to session storage & database
  useEffect(() => {
    if (studentScore.length == 3) {
      SaveScoreToSessionStorage(
        studentScore.reduce((a, b) => a + b.point, 0),
        pathname
      );

      quizTestPost(
        studentScore.reduce((a, b) => a + b.point, 0),
        pathname
      ).then((res) => setResponseSubmitQuiz(res));
    }
  }, [studentScore, studentScore.length, pathname]);

  return (
    <>
      {isDomLoad && (
        <div className="player-wrapper">
          <ReactPlayer
            ref={videoRef}
            url={
              contentVideo?.videoUrl?.includes("/watch?v=")
                ? contentVideo?.videoUrl?.replace("/watch?v=", "/embed/")
                : contentVideo?.videoUrl
            }
            // url={"https://youtu.be/mGav4kAXFwQ"}
            controls
            width="100%"
            height="100%"
            onProgress={handleTimeUpdate}
            playing={isPlaying}
            className="react-player bg-slate-300"
            config={{
              youtube: { playerVars: { origin: "https://www.youtube.com" } },
            }}
          />
        </div>
      )}
      <div className="flex justify-center items-center">
        <p className="font-bold text-center mt-4">
          Waktu video : {currentTime.toFixed(2)} detik
        </p>
      </div>
      <ModalQuiz
        isOpen={isOpenModal}
        questions={contentVideo?.questions}
        currentTime={currentTime}
        addScore={addScore}
        setIsOpenModal={setIsOpenModal}
        setIsPlaying={setIsPlaying}
      />
      {responseSubmitQuiz && <Toast message={responseSubmitQuiz} />}
    </>
  );
};

export default VideoPlayer;
