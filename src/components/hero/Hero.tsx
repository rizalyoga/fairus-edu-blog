import clsx from "clsx";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero min-h-[50rem] w-full mt-10"
      style={{
        backgroundImage:
          "url(https://i0.wp.com/senmagazine.co.uk/wp-content/uploads/2021/11/Depositphotos_307977302_XL-scaled-e1637008981212.jpg?fit=1159%2C559&ssl=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-6xl">
          <h1 className="mb-5 text-title font-bold text-white tracking-tight leading-[60px]">
            FAIRUS EDU.
          </h1>
          <p className="mb-5 text-base-text text-white ">
            We accompany and provide therapy for children and individuals who
            need it. Starting with an accompanying teacher at school and
            progressing to behavioral therapy, remedial teaching, home programs,
            and special assessments. We also offer workshops, learning
            consultations, and parenting support. Check our services here!
          </p>
          <Link href={"/login"}>
            <button
              className={clsx(
                "btn bg-primary-green border-primary-green text-white text-base-text",
                "hover:text-primary-text",
                "dark:border-slate-500 dark:hover:text-slate-200 dark:hover:bg-slate-600 dark:hover:border-slate-600"
              )}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
