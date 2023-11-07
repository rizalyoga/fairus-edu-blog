import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import ModalQuiz from "../modal/ModalQuiz";
import { QuestionVideoInterface } from "@/app/types/types";

const VideoPlayer = ({
  contentVideo,
}: {
  contentVideo: QuestionVideoInterface | null;
}) => {
  const videoRef = useRef<ReactPlayer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDomLoad, setIsDomLoad] = useState(false);

  const handleTimeUpdate = (e: any) => {
    setCurrentTime(e.playedSeconds);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const setContinuePlayVideo = () => {
    setIsPlaying(true);
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

      if (currentQuestion && isPlaying) {
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
            controls
            width="100%"
            height="100%"
            onProgress={handleTimeUpdate}
            playing={isPlaying}
            className="react-player"
          />
        </div>
      )}
      <div className="flex justify-center items-center">
        <p className="font-bold text-center mt-4">
          Current Time: {currentTime.toFixed(2)} seconds
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
