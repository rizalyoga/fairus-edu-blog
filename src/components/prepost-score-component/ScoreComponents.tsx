import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ScoreComponents = ({
  pretestScore,
  setIsThereIsScore,
}: {
  pretestScore: string | number | null;
  setIsThereIsScore: React.Dispatch<
    React.SetStateAction<string | number | null>
  >;
}) => {
  const pathname = usePathname();

  if (!pretestScore) {
    return <></>;
  }

  return (
    <div className="dashboard-content-container mb-4 flex flex-col justify-center items-center">
      <h1 className="font-bold">Score pretest anda : </h1>
      <h1 className="font-bold text-4xl my-4">{pretestScore}</h1>

      <Link href={`${pathname}`} onClick={() => setIsThereIsScore(null)}>
        <button className="btn w-full bg-primary-violet text-white hover:text-slate-700 dark:hover:text-slate-200">
          Kerjakan Kembali Soal
        </button>
      </Link>
    </div>
  );
};

export default ScoreComponents;
