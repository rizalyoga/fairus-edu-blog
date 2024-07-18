"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { finalTestPost } from "@/data/finalTestPost";
import { getLessonNamePostTest } from "@/helper/GetLessonsNameFromPathname";
import { SaveScoreToSessionStorage } from "@/helper/SaveScoreToSessionStorage";

import ConfirmationModal from "@/components/modal/ConfirmationModal";
import Loading from "@/components/loading/Loading";
import Toast from "@/components/toast/Toast";
import ScoreComponents from "../prepost-score-component/ScoreComponents";

import VokalPostTestQuestoins from "@/data/final-test/VokalPostTestQuestions.json";

interface UserAnswers {
  [questionId: number]: string;
}

const FinalTest = () => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [score, setScore] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [responseSubmit, setResponseSubmit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isThereIsScore, setIsThereIsScore] = useState<number | string | null>(
    null
  );

  const pathname = usePathname();

  useEffect(() => {
    const dataStudentScore = JSON.parse(
      sessionStorage.getItem("student-score") as string
    );

    setIsThereIsScore(dataStudentScore?.[0]?.[getLessonNamePostTest(pathname)]);
  }, [pathname]);

  const handleAnswer = (questionId: number, selectedAnswer: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const choiceAlpabhet = (index: number) => {
    switch (index) {
      case 0:
        return "a.";
      case 1:
        return "b.";
      case 2:
        return "c.";
      case 3:
        return "d.";

      default:
        break;
    }
  };

  const isOpenModalHandler = () => {
    setIsOpenModal((open) => !open);
  };

  const handleSubmit = () => {
    isOpenModalHandler();
  };

  const confirmationHandler = () => {
    setIsLoading((loading) => !loading);
    let totalScore = 0;
    const dataStudent = JSON.parse(sessionStorage.getItem("student") as string);

    for (let i = 0; i < VokalPostTestQuestoins.length; i++) {
      if (userAnswers[i + 1] === VokalPostTestQuestoins[i].answer) {
        setScore((totalScore += VokalPostTestQuestoins[i].score));
      }
    }

    const lessonsName = getLessonNamePostTest(pathname);

    const payload = {
      id: dataStudent?.id,
      username: dataStudent?.username,
      final_test_score: totalScore,
      lessons_name: lessonsName,
    };

    finalTestPost(payload)
      .then((res) => {
        setResponseSubmit(res);
        SaveScoreToSessionStorage(payload.final_test_score, pathname);
      })
      .then(() => setIsLoading((loading) => !loading))
      .then(() =>
        setTimeout(() => {
          if (totalScore === 0) {
            setIsThereIsScore((totalScore += 1));
          } else {
            setIsThereIsScore(totalScore);
          }
        }, 1000)
      )
      .finally(() => {
        setUserAnswers({});
      });

    isOpenModalHandler();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isThereIsScore) {
    return (
      <ScoreComponents
        pretestScore={isThereIsScore}
        setIsThereIsScore={setIsThereIsScore}
      />
    );
  }

  return (
    <>
      <ConfirmationModal
        isOpenModal={isOpenModal}
        isOpenHandler={isOpenModalHandler}
        functionHandler={confirmationHandler}
        titleMessage="Konfirmasi Jawaban"
        message="Apakah anda sudah yakin dengan jawaban anda ?"
      />
      <div className="dashboard-content-container mb-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-2">Post Test</h2>
          {score > 0 && (
            <p>
              Your Score: <span className="font-bold">{score}</span>
            </p>
          )}
        </div>
        {VokalPostTestQuestoins.map((question) => (
          <div key={question.id} className="mb-8">
            <span className="flex">
              <p>{question.id}.</p>
              <p className="ml-2">{question.question}</p>
            </span>
            <ul>
              {question.choices.map((choice, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswer(question.id, choice)}
                  className={clsx(
                    "ml-4 p-2 w-[95%] cursor-pointer transition my-1 rounded-md",
                    "md:w-[97%]",
                    "lg:w-[98%]",
                    userAnswers[question.id] === choice
                      ? " bg-primary-green text-white"
                      : " hover:bg-slate-100 dark:hover:bg-base-300"
                  )}
                >
                  {choiceAlpabhet(index)} {choice}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          className={clsx(
            "btn bg-primary-violet text-white w-full my-4",
            "hover:text-primary-text dark:hover:text-slate-100",
            "dark:hover:bg-slate-600"
          )}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {responseSubmit && <Toast message={responseSubmit} />}
    </>
  );
};

export default FinalTest;
