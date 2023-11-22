import React from "react";
import { DataScoreInterface } from "@/types/types";

const ConsonantCard = ({
  studentScore,
}: {
  studentScore: DataScoreInterface;
}) => {
  return (
    <>
      <h4 className="font-bold mt-10 mb-2">Pengucapan Huruf Konsonan</h4>
      <div className="dashboard-cards-wrapper">
        {/* PRETEST & POST TEST */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Huruf Konsonan
          </h1>
          <span className="w-full  flex flex-col justify-center items-center font-bold">
            <span className="py-4 border-b-2 w-full text-center">
              <h3 className="text-xl">Nilai Pretest :</h3>
              <h1 className="font-bold text-6xl text-center ">
                {studentScore?.konsonan_pretest
                  ? studentScore?.konsonan_pretest
                  : 0}
              </h1>
            </span>
            <hr />
            <span className="py-4 w-full text-center">
              <h3 className="text-xl">Nilai Post Test :</h3>
              <h1 className="font-bold text-6xl text-center">
                {studentScore?.konsonan_post_test
                  ? studentScore?.konsonan_post_test
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN B */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan B
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_b_score
                  ? studentScore?.video_kon_b_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN C */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan C
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_c_score
                  ? studentScore?.video_kon_c_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN D */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan D
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_d_score
                  ? studentScore?.video_kon_d_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN J */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan J
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_j_score
                  ? studentScore?.video_kon_j_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN K */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan K
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_k_score
                  ? studentScore?.video_kon_k_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN M */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan M
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_m_score
                  ? studentScore?.video_kon_m_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN N */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan N
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_n_score
                  ? studentScore?.video_kon_n_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN P */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan P
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_p_score
                  ? studentScore?.video_kon_p_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN S */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan S
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_s_score
                  ? studentScore?.video_kon_s_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN T */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan T
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_t_score
                  ? studentScore?.video_kon_t_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>

        {/* KONSONAN NG */}
        <div className="dashboard-card-container">
          <h1 className="font-bold text-title-sub-section text-center">
            Pengucapan Konsonan NG
          </h1>
          <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
            <span className="py-4 w-full h-full text-center flex flex-col justify-center items-center">
              <h3 className="font-bold text-xl mb-6">Nilai Kuis Video :</h3>
              <h1 className="font-bold text-8xl text-center">
                {studentScore?.video_kon_ng_score
                  ? studentScore?.video_kon_ng_score
                  : 0}
              </h1>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ConsonantCard;
