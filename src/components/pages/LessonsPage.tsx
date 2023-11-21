"use client";

import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";

const LessonsPage = () => {
  const [isDomLoad, setIsDomLoad] = useState(false);

  useEffect(() => {
    setIsDomLoad(true);
  }, []);
  return (
    <div className="bg-base-100 pt-20">
      <div className="content-container px-4 flex justify-center flex-col items-center lg:px-0">
        <h1 className="font-bold text-title-section text-center pt-12 pb-10 text-primary-green">
          Pembelajaran
        </h1>
        <p className="text-center text-base-text pb-10 md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          consectetur nibh sed facilisis efficitur. Nam fringilla imperdiet
          feugiat. Mauris facilisis diam nulla. Nam fringilla imperdiet feugiat.
          Mauris facilisis diam nulla. Nam fringilla imperdiet feugiat.
        </p>

        {isDomLoad && (
          <div className="player-wrapper mb-10">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=NujCjQj5Xes"
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

        <h4 className="text-center font-bold text-3xl">
          The steps to start class
        </h4>

        <div className="grid gap-6 py-10 sm:grid-cols-2">
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              1 – Register Account
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              2 – Do The Pretest
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              3 – Learn from the videos that are available
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              4 – Do The Quiz And Final Test
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
