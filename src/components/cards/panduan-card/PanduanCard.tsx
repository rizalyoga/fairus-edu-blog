import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { panduanProps } from "@/types/types";

const PanduanCard = (props: panduanProps) => {
  return (
    <Link
      href={props.url}
      className={clsx(
        "border rounded-lg p-4 min-h-[200px] bg-primary-violet text-white transition",
        "hover:shadow-md hover:bg-primary-pink hover:font-bold hover:underline",
        "dark:border-slate-400"
      )}
    >
      <span className="bg-primary-green w-8 h-8 rounded-full grid content-center border border-white">
        <p className=" text-white text-center text-sm">{props.id}</p>
      </span>
      <div className="flex justify-center items-center text-center h-3/4 text-xl">
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

export default PanduanCard;
