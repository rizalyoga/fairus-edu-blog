import React, { useEffect, useState } from "react";
import { QuestionVideoType } from "@/app/types/types";
import clsx from "clsx";

interface ModalQuizProps {
  isOpen: boolean;
  closeModal: () => void;
  setContinuePlayVideo: () => void;
  questions: QuestionVideoType[] | undefined;
  currentTime: number;
}

const ModalQuiz = ({
  isOpen,
  closeModal,
  setContinuePlayVideo,
  questions,
  currentTime,
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
      console.log("selamat jawabanmu benar 🎊");
    } else {
      console.log("maaf jawabanmu salah 😢");
    }
    closeModal(), setContinuePlayVideo();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div
        className={clsx("modal-box -mt-64", "md:-mt-80", "lg:-mt-24 lg:ml-48")}
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
                        "btn w-full my-1 text-white bg-primary-green",
                        "hover:text-primary-text",
                        "dark:hover:bg-slate-300"
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
