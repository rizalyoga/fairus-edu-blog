import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { panduanProps } from "@/types/types";

import ModalPanduan from "@/components/modal/ModalPanduan";

const PanduanCard = (props: panduanProps) => {
  const [isOpenModal, setIsOpenModal] = useState("close");

  return (
    <>
      {props?.subMenu ? (
        <>
          <div
            className={clsx(
              "border rounded-lg p-4 min-h-[200px] bg-primary-violet text-white transition cursor-pointer",
              "hover:shadow-md hover:bg-primary-pink hover:font-bold hover:underline",
              "dark:border-slate-400"
            )}
            onClick={() => setIsOpenModal("open")}
          >
            <span className="bg-primary-green w-8 h-8 rounded-full grid content-center border border-white">
              <p className=" text-white text-center text-sm">{props.id}</p>
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
            "border rounded-lg p-4 min-h-[200px] bg-primary-violet text-white transition",
            "hover:shadow-md hover:bg-primary-pink hover:font-bold hover:underline",
            "dark:border-slate-400"
          )}
        >
          <span className="bg-primary-green w-8 h-8 rounded-full grid content-center border border-white">
            <p className=" text-white text-center text-sm">{props.id}</p>
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
