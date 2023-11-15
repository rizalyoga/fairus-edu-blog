import React from "react";
import clsx from "clsx";

const DashboardLoading = () => {
  const length = [1, 2, 3, 4, 5, 6];

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
            className="animate-pulse rounded-xl shadow-md min-h-[300px] p-4 relative bg-base-300"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLoading;
