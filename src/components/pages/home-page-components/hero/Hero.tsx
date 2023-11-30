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
          <h1 className="mb-5 font-bold text-white tracking-tight leading-[60px] text-[3.5rem] md:text-title">
            Parenting Bina Bicara.
          </h1>
          <p className="mb-5 text-base-text text-white ">
            Selamat datang di Parenting Bina Bicara, platform pembelajaran yang
            dirancang khusus untuk membantu orang tua dalam mendidik anak
            tunarungu secara mandiri. Kami menyediakan materi dan video yang
            komprehensif untuk memfasilitasi intervensi efektif dalam
            pengembangan kemampuan berbicara anak Anda.
          </p>
          <Link href={"/login"}>
            <button
              className={clsx(
                "btn bg-primary-green border-primary-green text-white text-base-text",
                "hover:text-primary-text",
                "dark:border-slate-500 dark:hover:text-slate-200 dark:hover:bg-slate-600 dark:hover:border-slate-600"
              )}
            >
              Mulai Belajar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
