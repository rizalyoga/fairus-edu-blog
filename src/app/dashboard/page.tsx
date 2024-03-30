"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";

import PanduanRoute from "@/routes/panduanRoute.json";
import { panduanProps } from "@/types/types";

import DashboardLoading from "@/components/loading/DashboardLoading";
import PanduanCard from "@/components/cards/panduan-card/PanduanCard";
import { getDataScoreStudent } from "@/data/getDataStudentScoreById";

const Dashboard = () => {
  const [panduan, setPanduan] = useState<panduanProps[]>([]);
  const [pelatihan, setPelatihan] = useState<panduanProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pendahuluanRoutes = PanduanRoute.slice(0, 2);
    setPanduan(pendahuluanRoutes);

    const pelatiahnRoutes = PanduanRoute.slice(2);
    setPelatihan(pelatiahnRoutes);

    const dataStundent = JSON.parse(
      sessionStorage.getItem("student") as string
    );

    const stundentScoreData = JSON.parse(
      sessionStorage.getItem("student-score") as string
    );

    if (!stundentScoreData) {
      getDataScoreStudent(dataStundent.id)
        .then((res) => {
          sessionStorage.setItem("student-score", JSON.stringify(res));
        })

        .then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <DashboardLoading />;
  }

  return (
    <div className="dashboard-content-container">
      <div
        className={clsx(
          "header-content",
          "sm:flex sm:justify-between items-center"
        )}
      >
        <h1 className="text-title-sub-section font-bold">
          Panduan Website Parbicara
        </h1>
      </div>
      <div className="my-4 grid gap-6 sm:grid-cols-2 md:grid-cols-2">
        {panduan &&
          panduan.map((content) => (
            <PanduanCard
              key={content.id}
              id={content.id}
              name={content.name}
              url={content.url}
            />
          ))}
      </div>
      <h1 className="text-title-sub-section font-bold"> Materi Pelatihan</h1>
      <div className="dashboard-cards-wrapper">
        {pelatihan &&
          pelatihan.map((content) => (
            <PanduanCard
              key={content.id}
              id={content.id}
              name={content.name}
              url={content.url}
              subMenu={content.subMenu}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
