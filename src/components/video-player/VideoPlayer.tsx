import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import ModalQuiz from "../modal/ModalQuiz";
import { QuestionVideoInterface } from "@/types/types";

const VideoPlayer = ({
  contentVideo,
}: {
  contentVideo: QuestionVideoInterface | null;
}) => {
  const videoRef = useRef<ReactPlayer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDomLoad, setIsDomLoad] = useState(false);

  const handleTimeUpdate = (e: any) => {
    setCurrentTime(e.playedSeconds);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const setContinuePlayVideo = () => {
    setIsPlaying((playing) => !playing);
  };

  useEffect(() => {
    setIsDomLoad(true);
  }, []);

  useEffect(() => {
    if (contentVideo) {
      const currentQuestion = contentVideo.questions.find((question) => {
        return (
          currentTime >= question.second && currentTime <= question.second + 1
        );
      });

      if (currentQuestion && !isPlaying) {
        // Pause video otomatis
        if (videoRef.current) {
          videoRef.current.seekTo(currentQuestion.second, "seconds");
          videoRef.current.getInternalPlayer().pauseVideo();
        }

        // Tampilkan modal dengan pertanyaan dari currentQuestion
        setIsOpenModal(true);
      }
    }
  }, [currentTime, isPlaying, contentVideo]);

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
        closeModal={closeModal}
        setContinuePlayVideo={setContinuePlayVideo}
        questions={contentVideo?.questions}
        currentTime={currentTime}
      />
    </>
  );
};

export default VideoPlayer;
