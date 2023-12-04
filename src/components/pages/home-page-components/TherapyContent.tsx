import React from "react";
import Image from "next/image";
import clsx from "clsx";

import BreathingImage from "public/assets/home-second.webp";
import VowelImage from "public/assets/home-third.webp";
import SuccesImage from "public/assets/home-3.jpeg";
import ActivityImage from "public/assets/home-4.jpg";

import VideoPlayerLandingPage from "@/components/video-player/VideoPlayerLandingPage";

const TherapyContent = () => {
  return (
    <>
      {/* Section 1*/}
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
              <div className="flex justify-center items-center w-full">
                <Image
                  src={BreathingImage}
                  width={600}
                  height={600}
                  alt="ilustration"
                  placeholder="blur"
                  className="rounded-lg mb-8 lg:basis-1/2 lg:hidden"
                />
              </div>
              <p className="text-base-text mb-6">
                Waktu terbaik untuk memulai terapi bicara tergantung pada
                kebutuhan individual setiap anak. Namun, banyak ahli menyarankan
                untuk memulai sejak dini jika ada kekhawatiran tentang
                perkembangan bicara dan bahasa anak. Anak-anak bisa mendapatkan
                manfaat dari terapi bicara sejak usia batita, karena ini adalah
                waktu di mana mereka mulai belajar berkomunikasi.
              </p>
            </div>
            <Image
              src={BreathingImage}
              width={600}
              height={600}
              alt="ilustration"
              placeholder="blur"
              className="rounded-lg hidden lg:basis-1/2 lg:block"
            />
          </div>
          {/* Second Group */}
          <div
            className={clsx(
              "py-16 flex gap-12 justify-center items-center flex-col -mt-24",
              "lg:items-start lg:justify-between lg:flex-row lg:mt-0"
            )}
          >
            <Image
              src={VowelImage}
              width={600}
              height={600}
              alt="ilustration"
              placeholder="blur"
              className="rounded-lg hidden lg:basis-1/2 lg:block"
            />
            <div className="lg:basis-1/2">
              <h2 className="font-bold text-title-section text-primary-violet tracking-tighter mb-6">
                Kegiatan apa saja yang dilakukan dalam terapi wicara?
              </h2>
              <div className="flex justify-center items-center w-full">
                <Image
                  src={VowelImage}
                  width={600}
                  height={600}
                  alt="ilustration"
                  placeholder="blur"
                  className="rounded-lg mb-8 lg:basis-1/2 lg:hidden"
                />
              </div>
              <p className="text-base-text mb-6">
                Terapi bicara untuk anak tunarungu meliputi beberapa kegiatan
                utama, termasuk latihan pernafasan untuk mengatur napas saat
                berbicara, pelemasan organ bicara seperti lidah dan bibir untuk
                fleksibilitas, pembentukan suara yang beragam, serta latihan
                pengucapan vokal dan konsonan yang tepat. Kegiatan ini bertujuan
                meningkatkan kejelasan dan pemahaman bicara anak.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-base-100 -mt-12">
        <div className={clsx("content-container px-4", "lg:px-2", "xl:px-0")}>
          <div
            className={clsx(
              "py-10 flex gap-12 justify-center items-center flex-col-reverse -mt-36",
              "lg:items-start lg:justify-between lg:flex-row lg:-mt-28"
            )}
          >
            <div className="lg:basis-1/2">
              <h2 className="font-bold text-title-section text-primary-violet tracking-tighter mb-6">
                Berapa lama Anda membutuhkan terapi wicara?
              </h2>
              <div className="flex justify-center items-center w-full">
                <Image
                  src={ActivityImage}
                  width={600}
                  height={600}
                  alt="ilustration"
                  placeholder="blur"
                  className="rounded-lg mb-8 lg:basis-1/2 lg:hidden"
                />
              </div>
              <p className="text-base-text mb-6">
                Lama terapi bicara anak tunarungu bergantung pada usia saat
                terapi dimulai, dukungan konsisten dari orang tua atau
                pendamping, dan penggunaan serta adaptasi dengan alat bantu
                dengar. Terapi cenderung lebih berhasil jika dimulai sejak dini
                dan didukung secara aktif di rumah, dengan perkembangan individu
                anak sebagai faktor utama dalam menentukan durasi terapi.
              </p>
            </div>
            <Image
              src={ActivityImage}
              width={600}
              height={600}
              alt="ilustration"
              placeholder="blur"
              className="rounded-lg hidden lg:basis-1/2 lg:block"
            />
          </div>
          {/* Second Group */}
          <div
            className={clsx(
              "py-16 flex gap-12 justify-center items-center flex-col -mt-24",
              "lg:items-start lg:justify-between lg:flex-row lg:-mt-12"
            )}
          >
            <Image
              src={SuccesImage}
              width={600}
              height={600}
              alt="ilustration"
              placeholder="blur"
              className="rounded-lg hidden lg:block lg:basis-1/2"
            />
            <div className="lg:basis-1/2">
              <h2 className="font-bold text-title-section text-primary-violet tracking-tighter mb-6">
                Apakah terapi wicara berhasil?
              </h2>
              <div className="flex justify-center items-center w-full">
                <Image
                  src={SuccesImage}
                  width={600}
                  height={600}
                  alt="ilustration"
                  placeholder="blur"
                  className="rounded-lg mb-8 lg:basis-1/2 lg:hidden"
                />
              </div>
              <p className="text-base-text mb-6">
                Ya, terapi bicara memang efektif. Ini adalah metode intervensi
                yang telah terbukti berhasil dan telah membantu anak untuk
                meningkatkan keterampilan bahasa dan komunikasi mereka. Anda
                bisa melihat hasilnya sendiri pada video contoh yang tersedia.
              </p>
            </div>
          </div>
          <div className="-mt-10 lg:-mt-4">
            <VideoPlayerLandingPage videoLink="https://www.youtube.com/watch?v=uzCUdR5iFjk" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TherapyContent;
