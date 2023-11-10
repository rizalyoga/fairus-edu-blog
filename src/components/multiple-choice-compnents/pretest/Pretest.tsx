import React from "react";
import clsx from "clsx";
import { PrestestProps } from "@/types/types";

const PretestComponent = ({
  PretestQuestions,
}: {
  PretestQuestions: PrestestProps[];
}) => {
  return (
    <>
      {PretestQuestions.map((question) => (
        <div key={question.id} className="my-2">
          <p>
            {question.id} {question.question}
          </p>
          {question?.choices.map((choice, idx) => (
            <span
              key={idx}
              className="ml-3 flex justify-start items-center gap-2"
            >
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              <p>{choice}</p>
            </span>
          ))}
        </div>
      ))}
      <span
        className={clsx(
          "btn bg-primary-violet text-base-100 w-full my-2",
          "hover:bg-slate-600",
          "dark:text-white"
        )}
      >
        Submit
      </span>
    </>
  );
};

export default PretestComponent;
