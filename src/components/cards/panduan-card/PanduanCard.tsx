import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { panduanProps } from "@/types/types";

import ModalPanduan from "@/components/modal/ModalPanduan";

const PanduanCard = (props: panduanProps) => {
  const [isOpenModal, setIsOpenModal] = useState("close");

  const setColor = (modulName: string) => {
    if (modulName.includes("Pengenalan")) {
      return "bg-red-400";
    } else if (modulName.includes("Vokal")) {
      return "bg-yellow-400";
    } else if (modulName.includes("Konsonan")) {
      return "bg-blue-400";
    } else {
      return "bg-primary-violet";
    }
  };

  return (
    <>
      {props?.subMenu ? (
        <>
          <div
            className={clsx(
              "border rounded-lg p-4 min-h-[200px] text-white transition cursor-pointer",
              "hover:shadow-md hover:bg-primary-pink hover:font-bold hover:underline",
              "dark:border-slate-400",
              setColor(props.name)
            )}
            onClick={() => setIsOpenModal("open")}
          >
            <span className="bg-primary-green w-8 h-8 rounded-full grid content-center border border-white">
              <p className=" text-white text-center text-lg font-semibold">
                {props.id}
              </p>
            </span>
            <div className="flex justify-center items-center text-center h-3/4 text-xl">
              <p className="-mt-4">{props.name}</p>
            </div>
          </div>
          {isOpenModal === "open" && (
            <ModalPanduan
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              subMenu={props.subMenu}
            />
          )}
        </>
      ) : (
        <Link
          href={props.url}
          className={clsx(
            "border rounded-lg p-4 min-h-[200px] text-white transition",
            "hover:shadow-md hover:bg-primary-pink hover:font-bold hover:underline",
            "dark:border-slate-400",
            setColor(props.name)
          )}
        >
          <span className="bg-primary-green w-8 h-8 rounded-full grid content-center border border-white">
            <p className=" text-white text-center text-lg font-semibold">
              {props.id}
            </p>
          </span>
          <div className="flex justify-center items-center text-center h-3/4 text-xl">
            <p className="-mt-4">{props.name}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default PanduanCard;
