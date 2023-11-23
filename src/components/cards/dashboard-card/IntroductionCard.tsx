import React from "react";
import { DataScoreInterface } from "@/types/types";

const IntroductionCard = ({
  studentScore,
}: {
  studentScore: DataScoreInterface;
}) => {
  return (
    <>
      <h4 className="font-bold mt-10 mb-2">Materi Pengenalan</h4>
      <div className="dashboard-cards-wrapper">
        {/* PRETEST & POST TEST */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Materi Pengenalan
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 border-b-2 w-full text-center">
              <h3 className="text-xl">Nilai Pretest :</h3>
              <h1 className="font-bold text-6xl text-center ">
                {studentScore?.pengenalan_pretest
                  ? studentScore?.pengenalan_pretest
                  : 0}
              </h1>
            </span>
            <hr />
            <span className="py-4 w-full text-center">
              <h3 className="text-xl">Nilai Post Test :</h3>
              <h1 className="font-bold text-6xl text-center">
                {studentScore?.pengenalan_post_test
                  ? studentScore?.pengenalan_post_test
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* PEMBENTUK SUARA */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pembentuk Suara
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_pembentuk_suara
                  ? studentScore?.video_pembentuk_suara
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* LATIHAN PERNAPASAN */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Latihan Pernapasan
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_pernapasan
                  ? studentScore?.video_pernapasan
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* PELEMASAN ORGAN DALAM */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pelemasan Organ Bicara
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_organ_bicara
                  ? studentScore?.video_organ_bicara
                  : 0}
              </h1>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default IntroductionCard;
