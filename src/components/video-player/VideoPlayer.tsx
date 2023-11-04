import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import ModalQuiz from "../modal/ModalQuiz";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
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
    if (currentTime >= 5 && currentTime <= 6 && isPlaying) {
      // Berhenti otomatis pada 5 detik
      if (videoRef.current) {
        videoRef.current.seekTo(5, "seconds");
        setIsPlaying(false);
        setIsOpenModal(true);
      }
    } else if (currentTime >= 10 && currentTime <= 11 && isPlaying) {
      // Berhenti otomatis pada 10 detik
      if (videoRef.current) {
        videoRef.current.seekTo(10, "seconds");
        setIsPlaying(false);
        setIsOpenModal(true);
      }
    }
  }, [currentTime, isPlaying]);

  return (
    <>
      {isDomLoad && (
        <div className="player-wrapper">
          <ReactPlayer
            ref={videoRef}
            url={
              videoUrl?.includes("/watch?v=")
                ? videoUrl.replace("/watch?v=", "/embed/")
                : videoUrl
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
      />
    </>
  );
};

export default VideoPlayer;
