"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { VideoQuestion } from "@/data/VideoQuestion";
import { QuestionVideoInterface } from "@/types/types";

import VideoPlayer from "@/components/video-player/VideoPlayer";

const Kegiatan = () => {
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
    <div className="paragraph-wrapper">
      <p className="pb-4">
        Perhatikan materi video berikut, dan kerjakan soal yang terdapat dalam
        video.
      </p>
      <div className="md:hidden">
        <VideoPlayer contentVideo={questions} />
      </div>
      <div className="collapse collapse-arrow bg-base-200 hidden md:grid">
        <input type="checkbox" name="my-accordion-2" defaultValue="cheked" />
        <div className="collapse-title bg-primary-green text-xl font-medium text-white">
          Materi Video
        </div>
        <div className="collapse-content">
          <div className="mt-4">
            <VideoPlayer contentVideo={questions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
