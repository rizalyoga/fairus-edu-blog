"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { getDataScoreStudent } from "@/data/getDataStudentScoreById";
import DashboardLoading from "@/components/loading/DashboardLoading";
import VocalCard from "@/components/cards/dashboard-card/VocalCard";
import ConsonantCard from "@/components/cards/dashboard-card/ConsonantCard";
import { DataScoreInterface } from "@/types/types";
// import Link from "next/link";

const Dashboard = () => {
  const [studentScores, setStudentScores] = useState<DataScoreInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        <>
          <VocalCard studentScore={studentScores?.[0]} />
          <ConsonantCard studentScore={studentScores?.[0]} />
        </>
      </div>
      {/* {studentScores.length > 0 ? (
        <h1>dashboard</h1>
      ) : (
        <div className="w-full">
          <h1 className="my-4">Silahkan kerjakan pretest terlebih dahulu.</h1>
          <Link href={"dashboard/pretest"} className="btn btn-primary ">
            Pretest
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default Dashboard;
