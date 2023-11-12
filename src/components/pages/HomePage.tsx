import React from "react";
import Hero from "../hero/Hero";
import { BsPersonWorkspace, BsPersonVcardFill } from "react-icons/bs";
import { PiExamFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="bg-base-100">
        <Hero />
        <div className="content-container py-16 px-4 lg:px-2">
          <h2 className="text-center font-bold text-title-section md:text-title text-primary-violet tracking-tighter">
            We Are Experts in Elearning
          </h2>
          <div className="py-10 flex gap-12 justify-center items-center flex-col lg:items-start lg:justify-between lg:flex-row ">
            <Image
              src={
                "https://assets.gatesnotes.com/8a5ac0b3-6095-00af-c50a-89056fbe4642/d1d37394-ff7d-43d9-8bc2-3f4fd2b1b59d/6-tools-for-teachers_2014_800px_v1.jpg"
              }
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
                className="btn btn-secondary-content font-bold text-primary-green hover:bg-white"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-violet py-28">
        <div className="content-container">
          <h2 className="text-center font-bold text-title-section md:text-title text-white tracking-tighter">
            Getting started online
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-10 px-4">
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
              <PiExamFill className="text-7xl lg:text-8xl text-white" />
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
        <div className="content-container py-16 px-4 lg:px-0">
          <div className="py-10 flex gap-12 justify-center items-center flex-col-reverse lg:items-start lg:justify-between lg:flex-row">
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
              src={
                "https://www.iinn.com/wp-content/uploads/2019/12/Insight-_-Blog-Types-of-Speech-Disoders-featured-image-626373794-1.jpg"
              }
              width={600}
              height={600}
              alt="ilustration"
              className="rounded-lg lg:basis-1/2"
            />
          </div>
          {/* all */}
          <div className="py-16 flex gap-12 justify-center items-center flex-col lg:items-start lg:justify-between lg:flex-row ">
            <Image
              src={
                "https://shodair.org/wp-content/uploads/2023/07/woman-doing-speech-therapy-with-little-blonde-boy-scaled.jpg"
              }
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
