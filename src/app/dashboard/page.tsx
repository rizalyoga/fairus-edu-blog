"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { getDataScoreStudent } from "@/data/getDataStudentScoreById";
import DashboardLoading from "@/components/loading/DashboardLoading";

const Dashboard = () => {
  const [studentScores, setStudentScores] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const length = [1, 2, 3, 4, 5, 6];

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

  return (
    <div className="dashboard-content-container">
      <h1 className="text-title-sub-section font-bold">Daftar Nilai</h1>
      <div
        className={clsx(
          "card-container my-4 grid gap-6",
          "sm:grid-cols-2",
          "md:grid-cols-2",
          "lg:grid-cols-2",
          "xl:grid-cols-3"
        )}
      >
        {length.map((length) => (
          <div
            key={length}
            className="bg-gradient-to-br from-primary-violet to-violet-500 text-slate-200 rounded-xl shadow-md min-h-[300px] p-4 relative"
          >
            <h1 className="font-bold text-title-sub-section">Tuna Rungu</h1>
            <span className="flex gap-2">
              <h3>Tuli : </h3>
              <p>100</p>
            </span>
            <a
              className={clsx(
                "absolute bottom-4 right-4 text-sm text-white cursor-pointer",
                "hover:underline"
              )}
            >
              Tampilkan detail
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
