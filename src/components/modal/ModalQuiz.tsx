import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { QuestionVideoType } from "@/types/types";
import clsx from "clsx";

interface ModalQuizProps {
  isOpen: boolean;
  questions: QuestionVideoType[] | undefined;
  currentTime: number;
  addScore: (score: number) => void;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModalQuiz = ({
  isOpen,
  questions,
  currentTime,
  addScore,
  setIsPlaying,
  setIsOpenModal,
}: ModalQuizProps) => {
  const [questionData, setQuestionData] = useState<
    QuestionVideoType[] | undefined
  >();

  useEffect(() => {
    if (isOpen && document) {
      (document.getElementById("my_modal_1") as HTMLFormElement).showModal();
    } else {
      (document.getElementById("my_modal_1") as HTMLFormElement).close();
    }
  }, [isOpen]);

  useEffect(() => {
    const data = questions?.filter((question) => {
      return question.second == currentTime;
    });

    setQuestionData(data);
  }, [currentTime, questions]);

  const submitAnswerHandling = (answer: string) => {
    if (answer == questionData?.[0].trueAnswer) {
      addScore(questionData?.[0]?.point);
    } else {
      addScore(0);
    }

    setIsPlaying(true);
    setIsOpenModal(false);
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div
        className={clsx(
          "modal-box max-w-xl",
          // "md:-mt-48",
          "lg:-mt-20 lg:ml-48"
        )}
      >
        <h3 className="font-bold text-lg">Silahkan jawab pertanyaan berikut</h3>

        {!questionData?.[0] ? (
          <div className="w-full flex justify-center items-center my-4">
            <span className="loading loading-spinner loading-lg text-success"></span>
          </div>
        ) : (
          <>
            <p className="py-4">{questionData?.[0]?.question}</p>
            <div className="modal-action justify-start ">
              <form method="dialog" className="w-full">
                <div className="flex flex-col -mt-6">
                  {questionData?.[0]?.choices.map((choice) => (
                    <button
                      key={choice}
                      className={clsx(
                        "w-full my-1 text-primary-text bg-base-300 border p-2 rounded-md text-start transition",
                        "hover:text-white hover:bg-primary-green",
                        "dark:text-slate-300 dark:border-slate-400"
                      )}
                      onClick={() => submitAnswerHandling(choice)}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
};

export default ModalQuiz;
