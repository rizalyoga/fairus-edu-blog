"use client";

import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="hero min-h-[50rem] w-full mt-10"
      style={{
        backgroundImage: "url(/assets/hero.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-6xl">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <h1 className="mb-5 font-bold text-white tracking-tight leading-[60px] text-[3.5rem] md:text-title">
              Parenting Bina Bicara.
            </h1>
            <p className="mb-5 text-base-text text-white ">
              Selamat datang di Parenting Bina Bicara, platform pembelajaran
              yang dirancang khusus untuk membantu orang tua dalam mendidik anak
              tunarungu secara mandiri. Kami menyediakan materi dan video yang
              komprehensif untuk memfasilitasi intervensi efektif dalam
              pengembangan kemampuan berbicara anak Anda.
            </p>
          </motion.div>
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
