"use client";

import React, { useState } from "react";
import QuizData from "@/data/pretest/tuna-rungu/budek.json";
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
        totalScore += QuizData[i].score;
      }
    }

    setScore(totalScore);
    alert(`Your score : ${score}`);
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
    <div className="dashboard-content-container">
      <h2 className="text-xl font-bold mb-2">Pretest Page</h2>
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
                  "ml-2 p-2 w-full cursor-pointer transition my-1 rounded-md",
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
      {score > 0 && <p>Your Score: {score}</p>}
    </div>
  );
};

export default Pretest;
