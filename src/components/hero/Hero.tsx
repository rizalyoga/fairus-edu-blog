import clsx from "clsx";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero min-h-[50rem]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-6xl">
          <h1 className="mb-5 text-title font-bold">Hello School</h1>
          <p className="mb-5 text-base-text">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Excepturi laudantium deleniti quo. Odit voluptatibus ea eaque
            ratione vitae dolor doloremque alias excepturi facilis consequatur,
            accusamus odio aliquid neque modi fugiat?
          </p>
          <Link href={"/login"}>
            <button
              className={clsx(
                "btn bg-primary-green border-primary-green text-white text-base-text",
                "hover:text-primary-text",
                "dark:border-slate-500 dark:hover:text-slate-200"
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
