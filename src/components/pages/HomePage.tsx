import React from "react";
import Image from "next/image";

import clsx from "clsx";

import Hero from "./home-page-components/hero/Hero";
import LearningSteps from "./home-page-components/LearningSteps";
import TherapyContent from "./home-page-components/TherapyContent";

import AboutImage from "public/assets/home-first.webp";

const HomePage = () => {
  return (
    <>
      <div className="bg-base-100">
        <Hero />
        <div
          className={clsx("content-container py-16 px-4", "lg:px-2", "xl:px-0")}
        >
          <h2
            className={clsx(
              "text-center font-bold text-title-section text-primary-violet tracking-tighter",
              "md:text-title"
            )}
          >
            Apa itu Bina Bicara?
          </h2>
          <div
            className={clsx(
              "py-10 flex gap-12 justify-center items-center flex-col",
              "lg:items-start lg:justify-between lg:flex-row"
            )}
          >
            <Image
              src={AboutImage}
              width={600}
              height={600}
              alt="ilustration"
              placeholder="blur"
              className="rounded-lg lg:basis-1/2"
            />
            <div className="lg:basis-1/2">
              <p className="text-base-text mb-6">
                Bina Bicara Anak Tunarungu merupakan sebuah intervensi edukatif
                yang dirancang untuk meningkatkan kemampuan berbicara dan
                komunikasi pada anak-anak dengan gangguan pendengaran. Program
                ini menyediakan instruksi dan latihan khusus untuk membantu
                peserta didik dalam memahami bahasa lisan dan menggunakan suara
                mereka efektif.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Learning Steps Component */}
      <LearningSteps />
      {/* Therapy Content Components */}
      <TherapyContent />
    </>
  );
};

export default HomePage;
