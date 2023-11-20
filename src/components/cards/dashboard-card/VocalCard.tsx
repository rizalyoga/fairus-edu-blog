import React from "react";
import { DataScoreInterface } from "@/types/types";

const VocalCard = ({ studentScore }: { studentScore: DataScoreInterface }) => {
  return (
    <>
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Vokal A
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_vokal_a_score
                ? studentScore.video_vokal_a_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.vokal_a_final_score
                ? studentScore.vokal_a_final_score
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
      {/* Vokal-I */}
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Vokal I
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_vokal_i_score
                ? studentScore.video_vokal_i_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.vokal_i_final_score
                ? studentScore.vokal_i_final_score
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
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_vokal_u_score
                ? studentScore.video_vokal_u_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.vokal_u_final_score
                ? studentScore.vokal_u_final_score
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
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_vokal_e_score
                ? studentScore.video_vokal_e_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.vokal_e_final_score
                ? studentScore.vokal_e_final_score
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
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_vokal_o_score
                ? studentScore.video_vokal_o_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.vokal_o_final_score
                ? studentScore.vokal_o_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>
    </>
  );
};

export default VocalCard;
