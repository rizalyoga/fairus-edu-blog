"use client";

import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import { usePathname } from "next/navigation";
import { VideoQuestion } from "@/data/VideoQuestion";
import { QuestionVideoInterface } from "@/types/types";

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
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>

            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Budek;
