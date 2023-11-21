import React, { useEffect, useState } from "react";

const ScoreComponents = ({ pretestScore }: { pretestScore: number }) => {
  return (
    <div className="dashboard-content-container mb-4 flex flex-col justify-center items-center">
      <h1 className="font-bold">Score pretest anda : </h1>
      <h1 className="font-bold text-4xl my-4">{pretestScore}</h1>
    </div>
  );
};

export default ScoreComponents;
