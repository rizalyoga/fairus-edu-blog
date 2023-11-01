"use client";

import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import { usePathname } from "next/navigation";
import { VideoQuestion } from "@/app/data/VideoQuestion";
import { QuestionVideoInterface } from "@/app/types/types";

const Budek = () => {
  const pathname = usePathname();
  const [questions, setQuestions] = useState<QuestionVideoInterface | null>(
    null
  );

  useEffect(() => {
    const videoContent = VideoQuestion.filter((question) => {
      return pathname.includes(question.path);
    });

    setQuestions(videoContent[0]);
  }, [pathname]);

  return (
    <div className="dashboard-content-container">
      <h1>Budek Page</h1>
      <VideoPlayer videoUrl={questions?.videoUrl as string} />
    </div>
  );
};

export default Budek;
