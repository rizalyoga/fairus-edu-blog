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
              className="rounded-lg lg:basis-1/2"
            />
            <div className="lg:basis-1/2">
              {/* <p className="font-bold mb-6">ABOUT</p> */}
              <p className="text-base-text mb-6">
                Bina Bicara Anak Tunarungu merupakan sebuah intervensi edukatif
                yang dirancang untuk meningkatkan kemampuan berbicara dan
                komunikasi pada anak-anak dengan gangguan pendengaran. Program
                ini menyediakan instruksi dan latihan khusus untuk membantu
                peserta didik dalam memahami bahasa lisan dan menggunakan suara
                mereka efektif.
              </p>
              {/* <Link
                href="/about"
                className={clsx(
                  "btn btn-secondary-content font-bold text-primary-green",
                  "hover:bg-white"
                )}
              >
                EXPLORE
              </Link> */}
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
            Tahapan Pembelajaran
          </h2>
          <div
            className={clsx(
              "grid gap-8 py-10 px-4",
              "sm:grid-cols-2",
              "lg:grid-cols-3"
            )}
          >
            <div className="flex items-center gap-6">
              <BsPersonVcardFill className="text-7xl text-white lg:text-9xl" />
              <span>
                <h5 className="font-bold text-white text-title-sub-section">
                  Registrasi Akun
                </h5>
                <p className="text-base-text text-slate-200">
                  Registrasi akun anda dan mulai login.
                </p>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <BsPersonWorkspace className="text-8xl text-white lg:text-9xl" />
              <span>
                <h5 className="font-bold text-white text-title-sub-section">
                  Belajar Melalui Video
                </h5>
                <p className="text-base-text text-slate-200">
                  Memulai belajar dengan materi video yang tersedia.
                </p>
              </span>
            </div>
            <div className="flex items-center  gap-6">
              <PiExamFill className="text-7xl text-white lg:text-9xl" />
              <span>
                <h5 className="font-bold text-white text-title-sub-section">
                  Mengerjakan Test
                </h5>
                <p className="text-base-text text-slate-200">
                  Mengerjakan pretest, kuis dan post tes
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
                Usia berapa yang terbaik untuk terapi wicara?
              </h2>
              <p className="text-base-text mb-6">
                Waktu terbaik untuk memulai terapi bicara tergantung pada
                kebutuhan individual setiap anak. Namun, banyak ahli menyarankan
                untuk memulai sejak dini jika ada kekhawatiran tentang
                perkembangan bicara dan bahasa anak. Anak-anak bisa mendapatkan
                manfaat dari terapi bicara sejak usia batita, karena ini adalah
                waktu di mana mereka mulai belajar berkomunikasi.
              </p>
              {/* <Link
                href="/lessons"
                className="btn font-bold text-primary-green hover:bg-white"
              >
                EXPLORE
              </Link> */}
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
                Kegiatan apa saja yang dilakukan dalam terapi wicara?
              </h2>
              <p className="text-base-text mb-6">
                Terapi bicara untuk anak tunarungu meliputi beberapa kegiatan
                utama, termasuk latihan pernafasan untuk mengatur napas saat
                berbicara, pelemasan organ bicara seperti lidah dan bibir untuk
                fleksibilitas, pembentukan suara yang beragam, serta latihan
                pengucapan vokal dan konsonan yang tepat. Kegiatan ini bertujuan
                meningkatkan kejelasan dan pemahaman bicara anak.
              </p>
              {/* <Link
                href="/lessons"
                className="btn font-bold text-primary-green hover:bg-white"
              >
                EXPLORE
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}

      <div className="bg-base-100 -mt-12">
        <div className={clsx("content-container px-4", "lg:px-2", "xl:px-0")}>
          <div
            className={clsx(
              "py-10 flex gap-12 justify-center items-center flex-col-reverse",
              "lg:items-start lg:justify-between lg:flex-row"
            )}
          >
            <div className="lg:basis-1/2">
              <h2 className="font-bold text-title-section text-primary-violet tracking-tighter mb-6">
                Berapa lama Anda membutuhkan terapi wicara?
              </h2>
              <p className="text-base-text mb-6">
                Lama terapi bicara anak tunarungu bergantung pada usia saat
                terapi dimulai, dukungan konsisten dari orang tua atau
                pendamping, dan penggunaan serta adaptasi dengan alat bantu
                dengar. Terapi cenderung lebih berhasil jika dimulai sejak dini
                dan didukung secara aktif di rumah, dengan perkembangan individu
                anak sebagai faktor utama dalam menentukan durasi terapi.
              </p>
              {/* <Link
                href="/lessons"
                className="btn font-bold text-primary-green hover:bg-white"
              >
                EXPLORE
              </Link> */}
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
                Apakah terapi wicara berhasil?
              </h2>
              <p className="text-base-text mb-6">
                Ya, terapi bicara memang efektif. Ini adalah metode intervensi
                yang telah terbukti berhasil dan telah membantu anak untuk
                meningkatkan keterampilan bahasa dan komunikasi mereka. Anda
                bisa melihat hasilnya sendiri pada video contoh yang tersedia.
              </p>
              {/* <Link
                href="/lessons"
                className="btn font-bold text-primary-green hover:bg-white"
              >
                EXPLORE
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
