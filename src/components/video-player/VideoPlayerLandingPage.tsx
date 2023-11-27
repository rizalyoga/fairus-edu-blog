"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayerLandingPage = ({ videoLink }: { videoLink: string }) => {
  const [isDOMLoaded, setIsDOMLoaded] = useState(false);

  useEffect(() => {
    if (!isDOMLoaded) setIsDOMLoaded(true);
  }, [isDOMLoaded]);

  return (
    <div className="pb-8">
      {isDOMLoaded && (
        <div className="player-wrapper">
          <ReactPlayer
            url={videoLink}
            controls
            width="100%"
            height="100%"
            className="react-player bg-slate-300"
            config={{
              youtube: { playerVars: { origin: "https://www.youtube.com" } },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayerLandingPage;
