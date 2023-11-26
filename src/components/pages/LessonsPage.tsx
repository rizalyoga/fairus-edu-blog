"use client";

import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const LessonsPage = () => {
  const [isDomLoad, setIsDomLoad] = useState(false);

  useEffect(() => {
    if (!isDomLoad) setIsDomLoad(true);
  }, [isDomLoad]);

  return (
    <div className="bg-base-100 pt-20">
      <div className="content-container px-4 flex justify-center flex-col items-center lg:px-0">
        <h1 className="font-bold text-title-section text-center pt-12 pb-10 text-primary-green">
          Pembelajaran
        </h1>
        <p className="text-center text-base-text pb-10 md:w-[80%]">
          Pembelajaran bina bicara meliputi assesmen awal, latihan pernapasan,
          pelemasan organ bicara untuk artikulasi yang jelas, teknik pembentukan
          suara yang resonan, pengucapan huruf vokal dan konsonan. Materi ini
          dirancang untuk meningkatkan kemampuan berbicara secara menyeluruh dan
          simak video panduan untuk mengakses materi tersebut.
        </p>

        {isDomLoad && (
          <div className="player-wrapper mb-10">
            <ReactPlayer
              url="https://youtu.be/QBRM4u4xj0Q"
              controls
              width="100%"
              height="100%"
              className="react-player bg-slate-300"
              config={{
                youtube: { playerVars: { origin: "https://www.youtube.com" } },
              }}
            />
          </div>
        )}

        <h4 className="text-center font-bold text-3xl">
          Langkah - langkah untuk memulai pembelajaran
        </h4>

        <div className="grid gap-6 py-10 sm:grid-cols-2">
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              1 – Mendaftar akun
            </h4>
            <p>
              Lakukan registrasi apabila belum memiliki akun. Proses ini
              melibatkan pengisian data diri seperti nama, email dan pembuatan
              kata sandi. Pastikan semua informasi diisi dengan benar untuk
              memudahkan verifikasi dan akses ke semua fitur website.
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              2 – Mengerjakan pretes
            </h4>
            <p>
              Sebelum memulai pembelajaran, lakukan pretest untuk mengetahui
              tingkat pemahaman awal Anda tentang materi. Pretest ini penting
              untuk menyesuaikan konten pembelajaran agar sesuai dengan
              kebutuhan dan kemampuan Anda.
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              3 – Belajar dari video yang tersedia
            </h4>
            <p>
              Ada tiga menu pembelajaran utama. Pertama, &apos;Pengenalan&apos;
              yang berisi materi pengantar, pembentukan suara, pernapasan, dan
              organ bicara. Penting untuk mengikuti setiap video pembelajaran
              secara berurutan untuk memahami materi dengan lengkap. Materi ini
              disajikan dalam format video yang interaktif dan mudah dipahami.
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              4 – Mengerjakan kuis dan posttes
            </h4>
            <p>
              Setelah menyelesaikan semua materi, ikuti kuis dan post-test yang
              tersedia. Tes ini bertujuan untuk mengevaluasi pemahaman Anda atas
              materi yang telah dipelajari. Hasil dari tes ini akan membantu
              menentukan sejauh mana kemajuan belajar Anda dan area mana yang
              perlu peningkatan.
            </p>
          </span>
        </div>
        <Link
          href="/login"
          className="mb-10 w-full btn bg-primary-green text-white hover:text-primary-text dark:hover:text-white"
        >
          Mulai Belajar
        </Link>
      </div>
    </div>
  );
};

export default LessonsPage;
