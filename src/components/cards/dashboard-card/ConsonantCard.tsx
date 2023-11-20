import React from "react";
import { DataScoreInterface } from "@/types/types";

const ConsonantCard = ({
  studentScore,
}: {
  studentScore: DataScoreInterface;
}) => {
  return (
    <>
      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan B
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_b_score
                ? studentScore.video_kon_b_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_b_final_score
                ? studentScore.kon_b_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan C
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_c_score
                ? studentScore.video_kon_c_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_c_final_score
                ? studentScore.kon_c_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan D
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_d_score
                ? studentScore.video_kon_d_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_d_final_score
                ? studentScore.kon_d_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan J
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_j_score
                ? studentScore.video_kon_j_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_j_final_score
                ? studentScore.kon_j_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan K
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_k_score
                ? studentScore.video_kon_k_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_k_final_score
                ? studentScore.kon_k_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan M
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_m_score
                ? studentScore.video_kon_m_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_m_final_score
                ? studentScore.kon_m_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan N
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_n_score
                ? studentScore.video_kon_n_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_n_final_score
                ? studentScore.kon_n_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan P
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_p_score
                ? studentScore.video_kon_p_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_p_final_score
                ? studentScore.kon_p_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan S
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_s_score
                ? studentScore.video_kon_s_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_s_final_score
                ? studentScore.kon_s_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan T
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_t_score
                ? studentScore.video_kon_t_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_t_final_score
                ? studentScore.kon_t_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>

      <div className="dashboard-card-container">
        <h1 className="font-bold text-title-sub-section text-center">
          Pengucapan Konsonan NG
        </h1>
        <span className="w-full mt-4 flex flex-col justify-center items-center font-bold">
          <span className="py-4 border-b-2 w-full text-center">
            <h3>Nilai Video Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.video_kon_ng_score
                ? studentScore.video_kon_ng_score
                : 0}
            </h1>
          </span>
          <hr />
          <span className="py-4 w-full text-center">
            <h3>Nilai Final Test </h3>
            <h1 className="font-bold text-4xl text-center">
              {studentScore.kon_ng_final_score
                ? studentScore.kon_ng_final_score
                : 0}
            </h1>
          </span>
        </span>
      </div>
    </>
  );
};

export default ConsonantCard;
