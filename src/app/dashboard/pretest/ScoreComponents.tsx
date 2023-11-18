import React from "react";

const ScoreComponents = ({
  setPretestButton,
}: {
  setPretestButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const studentScore = JSON.parse(
    sessionStorage.getItem("student-score") as string
  );

  return (
    <div className="dashboard-content-container mb-4">
      <h1 className="font-bold">
        Score pretest anda : {studentScore[0].pretest_score}
      </h1>
      {/* <p className="my-2">ingin mengerjakan ulang soal pretest ?</p> */}
      {/* <button
        className="btn btn-primary"
        onClick={() => setPretestButton(false)}
      >
        Kerjakan ulang soal
      </button> */}
    </div>
  );
};

export default ScoreComponents;
