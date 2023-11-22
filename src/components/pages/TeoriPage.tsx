"use client";

import React, { useState } from "react";
import clsx from "clsx";

import Pengaruh from "./teori-components/Pengaruh";
import Pelaksanaan from "./teori-components/Pelaksanaan";
import Gangguan from "./teori-components/Gangguan";
import Perkembangan from "./teori-components/Perkembangan";

const TeoriPage = () => {
  const [content, setContent] = useState(0);

  const changeContentHandler = (stateContent: number) => {
    switch (stateContent) {
      case 0:
        return <Perkembangan />;
      case 1:
        return <Gangguan />;
      case 2:
        return <Pengaruh />;
      case 3:
        return <Pelaksanaan />;
      default:
        break;
    }
  };

  return (
    <div className="bg-base-100 pt-20">
      <div className="content-container px-4 flex justify-center flex-col items-center lg:px-0">
        <h1 className="font-bold text-title-section text-center pt-12 pb-10 text-primary-green">
          Konsep Teoritis Bina Bicara
        </h1>
        <p className="text-center text-base-text pb-10 md:w-[80%]">
          Anda akan menemukan konsep teori dasar bina bicara yang esensial untuk
          mendukung pengembangan kemampuan bicara anak tunarungu. Informasi
          terperinci kami membantu orang tua memahami konsep penting dalam
          proses belajar anak.
        </p>
        <div className="direction-content flex flex-wrap justify-center gap-4">
          <button
            className={clsx("btn", content == 0 ? "btn-primary" : "")}
            onClick={() => setContent(0)}
          >
            Perkembangan
          </button>
          <button
            className={clsx("btn", content == 1 ? "btn-primary" : "")}
            onClick={() => setContent(1)}
          >
            Gangguan
          </button>
          <button
            className={clsx("btn", content == 2 ? "btn-primary" : "")}
            onClick={() => setContent(2)}
          >
            Pengaruh
          </button>
          <button
            className={clsx("btn", content == 3 ? "btn-primary" : "")}
            onClick={() => setContent(3)}
          >
            Pelaksanaan
          </button>
        </div>
        <div className="content-teori mt-16 mb-12 w-full lg:px-2 xl:px-0">
          {changeContentHandler(content)}
        </div>
      </div>
    </div>
  );
};

export default TeoriPage;
