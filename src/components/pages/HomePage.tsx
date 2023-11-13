import React from "react";
import Hero from "../hero/Hero";
import { BsPersonWorkspace, BsPersonVcardFill } from "react-icons/bs";
import { PiExamFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import AboutImage from "public/assets/home-first.webp";
import BreathingImage from "public/assets/home-second.webp";
import VowelImage from "public/assets/home-third.webp";
import clsx from "clsx";

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
            We Are Experts in Elearning
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
              className="rounded-lg lg:basis-1/2"
            />
            <div className="lg:basis-1/2">
              <p className="font-bold mb-6">ABOUT</p>
              <p className="text-base-text mb-6">
                We are experts in the field of children&apos;s education and
                therapy special needs and developing children&apos;s potential.
                As a foundation provider of educational and therapeutic
                assistance services, we have trained and experienced
                professionals to help children reach their best potential.
              </p>
              <Link
                href="/about"
                className={clsx(
                  "btn btn-secondary-content font-bold text-primary-green",
                  "hover:bg-white"
                )}
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-violet py-28">
        <div className="content-container">
          <h2
            className={clsx(
              "text-center font-bold text-title-section text-white tracking-tighter",
              "md:text-title"
            )}
          >
            Getting started online
          </h2>
          <div
            className={clsx(
              "grid gap-8 py-10 px-4",
              "sm:grid-cols-2",
              "lg:grid-cols-3"
            )}
          >
            <div className="flex items-center gap-6">
              <BsPersonVcardFill className="text-7xl text-white lg:text-8xl" />
              <span>
                <h5 className="font-bold text-white text-title-sub-section">
                  Register and Login
                </h5>
                <p className="text-base-text text-slate-200">
                  Register your account and start logging in.
                </p>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <BsPersonWorkspace className="text-7xl text-white" />
              <span>
                <h5 className="font-bold text-white text-title-sub-section">
                  Learn Through Videos
                </h5>
                <p className="text-base-text text-slate-200">
                  Start learning with the videos provided.
                </p>
              </span>
            </div>
            <div className="flex items-center  gap-6">
              <PiExamFill className="text-7xl text-white lg:text-8xl" />
              <span>
                <h5 className="font-bold text-white text-title-sub-section">
                  Do the Test
                </h5>
                <p className="text-base-text text-slate-200">
                  Doing pretests, quizzes and final tests.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* rd */}
      <div className="bg-base-100">
        <div
          className={clsx("content-container py-16 px-4", "lg:px-2", "xl:px-0")}
        >
          <div
            className={clsx(
              "py-10 flex gap-12 justify-center items-center flex-col-reverse",
              "lg:items-start lg:justify-between lg:flex-row"
            )}
          >
            <div className="lg:basis-1/2">
              <h2 className="font-bold text-title-section text-primary-violet tracking-tighter mb-6">
                Breathing Training
              </h2>
              <p className="text-base-text mb-6">
                This program is specifically designed to guide individuals in
                performing focused and structured breathing exercises. Through a
                series of personalized breathing activities and exercises, users
                can strengthen respiratory muscles, optimize breathing patterns,
                and ultimately improve voice clarity and fluency. With the aim
                of helping develop a better voice.
              </p>
              <Link
                href="/lessons"
                className="btn font-bold text-primary-green hover:bg-white"
              >
                EXPLORE
              </Link>
            </div>
            <Image
              src={BreathingImage}
              width={600}
              height={600}
              alt="ilustration"
              className="rounded-lg lg:basis-1/2"
            />
          </div>
          {/* all */}
          <div
            className={clsx(
              "py-16 flex gap-12 justify-center items-center flex-col",
              "lg:items-start lg:justify-between lg:flex-row"
            )}
          >
            <Image
              src={VowelImage}
              width={600}
              height={600}
              alt="ilustration"
              className="rounded-lg lg:basis-1/2"
            />
            <div className="lg:basis-1/2">
              <h2 className="font-bold text-title-section text-primary-violet tracking-tighter mb-6">
                Vowel and Consonant Pronunciation Training
              </h2>
              <p className="text-base-text mb-6">
                Through a series of interactive exercises and learning games,
                users are invited to focus on developing the ability to
                correctly articulate vowels and consonants. The program offers
                exercises tailored to the individual&apos;s level of need,
                helping to overcome specific challenges in sound pronunciation.
                With a structured approach, users can gain better pronunciation
                skills, improve clarity, and strengthen the ability to
                communicate effectively.
              </p>
              <Link
                href="/lessons"
                className="btn font-bold text-primary-green hover:bg-white"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
