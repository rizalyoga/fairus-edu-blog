"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { getDataScoreStudent } from "@/data/getDataStudentScoreById";
import { DataScoreInterface } from "@/types/types";

import VocalCard from "@/components/cards/dashboard-card/VocalCard";
import ConsonantCard from "@/components/cards/dashboard-card/ConsonantCard";
import IntroductionCard from "@/components/cards/dashboard-card/IntroductionCard";
import DashboardLoading from "@/components/loading/DashboardLoading";

const Dashboard = () => {
  const [studentScores, setStudentScores] = useState<DataScoreInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stateContentDashboard, setStateContentDashboard] = useState(0);

  useEffect(() => {
    const dataStundent = JSON.parse(
      sessionStorage.getItem("student") as string
    );

    const stundentScoreData = JSON.parse(
      sessionStorage.getItem("student-score") as string
    );

    if (dataStundent.id && !stundentScoreData) {
      getDataScoreStudent(dataStundent.id)
        .then((res) => {
          setStudentScores(res);
          sessionStorage.setItem("student-score", JSON.stringify(res));
        })

        .then(() => setIsLoading(false));
    } else {
      const stundentScoreData = JSON.parse(
        sessionStorage.getItem("student-score") as string
      );

      setStudentScores(stundentScoreData);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <DashboardLoading />;
  }

  const displayedContent = (stateContent: number) => {
    switch (stateContent) {
      case 0:
        return (
          <>
            <IntroductionCard studentScore={studentScores?.[0]} />
            <VocalCard studentScore={studentScores?.[0]} />
            <ConsonantCard studentScore={studentScores?.[0]} />
          </>
        );
      case 1:
        return <IntroductionCard studentScore={studentScores?.[0]} />;
      case 2:
        return <VocalCard studentScore={studentScores?.[0]} />;
      case 3:
        return <ConsonantCard studentScore={studentScores?.[0]} />;
      default:
        break;
    }
  };

  return (
    <div className="dashboard-content-container">
      <div
        className={clsx(
          "header-content",
          "sm:flex sm:justify-between items-center"
        )}
      >
        <h1 className="text-title-sub-section font-bold">Daftar Nilai</h1>
        <select
          className="select select-bordered w-full sm:max-w-[15rem] mt-2 text-base-text"
          value={stateContentDashboard}
          onChange={(e) => setStateContentDashboard(Number(e.target.value))}
        >
          <option className="text-base-text" value={0}>
            Semua
          </option>
          <option className="text-base-text" value={1}>
            Pengenalan
          </option>
          <option className="text-base-text" value={2}>
            Vokal
          </option>
          <option className="text-base-text" value={3}>
            Konsonan
          </option>
        </select>
      </div>
      {displayedContent(stateContentDashboard)}
    </div>
  );
};

export default Dashboard;
