import clsx from "clsx";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[50rem] bg-primary-violet">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-6xl">
          <h1 className="mb-5 text-title font-bold text-white ">
            Athalia&apos;s Blessing
          </h1>
          <p className="mb-5 text-base-text text-white ">
            Kami mendampingi dan memberi terapi bagi anak-anak dan individu yang
            membutuhkan. Mulai dengan guru pendamping di sekolah dan berkembang
            dengan terapi perilaku, remidial teaching, home program, dan asesmen
            khusus. Kami juga menawarkan workshop, konsultasi pembelajaran, dan
            dukungan parenting. Cek layanan kami di sini!
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
