"use client";

import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import { usePathname } from "next/navigation";
import { VideoQuestion } from "@/data/VideoQuestion";
import { QuestionVideoInterface } from "@/types/types";
import FinalTestForm from "@/components/final-test-form/FinalTestForm";

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
      <h1 className="my-4">Budek Page</h1>
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
          <article className="prose">
            {/* <h1 className="mb-4">Final Test</h1> */}
            <FinalTestForm />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Budek;
