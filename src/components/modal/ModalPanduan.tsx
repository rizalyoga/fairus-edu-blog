import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import Link from "next/link";

import { RoutesType } from "@/types/types";

import Loading from "../loading/Loading";

interface ModalPanduanProps {
  isOpenModal: string;
  subMenu: RoutesType[];
  setIsOpenModal: Dispatch<SetStateAction<string>>;
}

const ModalPanduan = ({
  isOpenModal,
  setIsOpenModal,
  subMenu,
}: ModalPanduanProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isOpenModal === "open") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [isOpenModal]);

  useEffect(() => {
    const modalElement = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement;

    if (modalOpen && modalElement) {
      modalElement.showModal();
    } else if (!modalOpen && modalElement) {
      modalElement.close();
    }
  }, [modalOpen]);

  return (
    <dialog id="my_modal_2" className="modal">
      <div className={clsx("modal-box max-w-xl w-full ")}>
        <button
          onClick={() => {
            setIsOpenModal("close");
            setModalOpen(false);
          }}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          <p className="mt-0.5 text-xl">✕</p>
        </button>

        <div className="grid grid-cols-2 gap-1 mt-8">
          {subMenu &&
            subMenu?.map((direction) => (
              <Link
                key={direction.name}
                href={direction?.path}
                className={clsx(
                  "btn bg-primary-green text-white my-2 w-full",
                  "hover:bg-primary-pink hover:font-bold hover:border hover:border-slate-300"
                )}
              >
                {direction?.name}
              </Link>
            ))}
        </div>
      </div>
    </dialog>
  );
};

export default ModalPanduan;
