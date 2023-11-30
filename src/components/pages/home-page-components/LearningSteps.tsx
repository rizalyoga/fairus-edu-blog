import React from "react";
import clsx from "clsx";

import { PiExamFill } from "react-icons/pi";
import { BsPersonWorkspace, BsPersonVcardFill } from "react-icons/bs";

const LearningSteps = () => {
  return (
    <div className="bg-primary-violet py-28">
      <div className="content-container">
        <h2
          className={clsx(
            "text-center font-bold text-title-section text-white tracking-tighter",
            "md:text-title"
          )}
        >
          Tahapan Pembelajaran
        </h2>
        <div
          className={clsx(
            "grid gap-8 py-10 px-4",
            "sm:grid-cols-2",
            "lg:grid-cols-3"
          )}
        >
          <div className="flex items-center gap-6">
            <BsPersonVcardFill className="text-7xl text-white lg:text-9xl" />
            <span>
              <h5 className="font-bold text-white text-title-sub-section">
                Registrasi Akun
              </h5>
              <p className="text-base-text text-slate-200">
                Registrasi akun anda dan mulai login.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <BsPersonWorkspace className="text-8xl text-white lg:text-9xl" />
            <span>
              <h5 className="font-bold text-white text-title-sub-section">
                Belajar Melalui Video
              </h5>
              <p className="text-base-text text-slate-200">
                Memulai belajar dengan materi video yang tersedia.
              </p>
            </span>
          </div>
          <div className="flex items-center  gap-6">
            <PiExamFill className="text-7xl text-white lg:text-9xl" />
            <span>
              <h5 className="font-bold text-white text-title-sub-section">
                Mengerjakan Test
              </h5>
              <p className="text-base-text text-slate-200">
                Mengerjakan pretest, kuis dan post tes.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSteps;
