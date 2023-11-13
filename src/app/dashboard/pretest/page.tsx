"use client";

import React, { useState } from "react";
import QuizData from "@/data/pretest/budek.json";
import clsx from "clsx";

interface UserAnswers {
  [questionId: number]: string;
}

const Pretest = () => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [score, setScore] = useState<number>(0);

  const handleAnswer = (questionId: number, selectedAnswer: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;

    for (let i = 0; i < QuizData.length; i++) {
      if (userAnswers[i + 1] === QuizData[i].answer) {
        setScore((totalScore += QuizData[i].score));
      }
    }

    alert(`Your score : ${totalScore}`);
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

  return (
    <div className="dashboard-content-container mb-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-2">Pretest Page</h2>
        {score > 0 && (
          <p>
            Your Score: <span className="font-bold">{score}</span>
          </p>
        )}
      </div>
      {QuizData.map((question) => (
        <div key={question.id} className="my-4">
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
  );
};

export default Pretest;
