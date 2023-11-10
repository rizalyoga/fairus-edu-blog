"use client";

import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import { usePathname } from "next/navigation";
import { VideoQuestion } from "@/data/VideoQuestion";
import { QuestionVideoInterface } from "@/types/types";
import PretestBudek from "@/data/pretest/tuna-rungu/budek.json";
import PretestComponent from "@/components/multiple-choice-compnents/pretest/Pretest";

const Budek = () => {
  const pathname = usePathname();
  const [questions, setQuestions] = useState<QuestionVideoInterface | null>(
    null
  );
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    const videoContent = VideoQuestion.filter((question) => {
      return pathname.includes(question.path);
    });

    setQuestions(videoContent[0]);
  }, [pathname]);

  const accordionHandler = () => {
    setIsAccordionOpen((open) => !open);
  };

  return (
    <div className="dashboard-content-container">
      <h1>Budek Page</h1>
      <div className="collapse collapse-arrow bg-base-200 my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Pre-Test</div>
        <div className="collapse-content">
          <PretestComponent PretestQuestions={PretestBudek} />
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Materi video</div>
        <div className="collapse-content">
          <VideoPlayer contentVideo={questions} />
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Final Test</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Budek;
