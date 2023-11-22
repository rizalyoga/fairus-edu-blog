import React from "react";
import { DataScoreInterface } from "@/types/types";

const VocalCard = ({ studentScore }: { studentScore: DataScoreInterface }) => {
  return (
    <>
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Huruf Vokal
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3 className="text-xl">Nilai Pretest :</h3>
            <h1 className="font-bold text-6xl text-center ">
              {studentScore?.vokal_pretest ? studentScore?.vokal_pretest : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3 className="text-xl">Nilai Post Test :</h3>
            <h1 className="font-bold text-6xl text-center">
              {studentScore?.vokal_post_test
                ? studentScore?.vokal_post_test
                : 0}
            </h1>
          </span>
        </span>

        {/* <a
            className={clsx(
              "absolute bottom-4 right-4 text-sm text-white cursor-pointer",
              "hover:underline"
            )}
          >
            Tampilkan detail
          </a> */}
      </div>
      {/* Vokal-A */}
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Vokal A
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
            <h1 className="font-bold text-8xl text-center">
              {studentScore?.video_vokal_a_score
                ? studentScore?.video_vokal_a_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      {/* Vokal-I */}
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Vokal I
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
            <h1 className="font-bold text-8xl text-center">
              {studentScore?.video_vokal_i_score
                ? studentScore?.video_vokal_i_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      {/* Vokal-U */}
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Vokal U
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
            <h1 className="font-bold text-8xl text-center">
              {studentScore?.video_vokal_u_score
                ? studentScore?.video_vokal_u_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      {/* Vokal-E */}
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Vokal E
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
            <h1 className="font-bold text-8xl text-center">
              {studentScore?.video_vokal_e_score
                ? studentScore?.video_vokal_e_score
                : 0}
            </h1>
          </span>
        </span>
      </div>
      {/* Vokal-O */}
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Vokal O
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
            <h1 className="font-bold text-8xl text-center">
              {studentScore?.video_vokal_o_score
                ? studentScore?.video_vokal_o_score
                : 0}
            </h1>
          </span>
        </span>
      </div>
    </>
  );
};

export default VocalCard;
