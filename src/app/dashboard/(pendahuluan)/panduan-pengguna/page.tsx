import React from "react";
import Link from "next/link";

const PanduanPengguna = () => {
  return (
    <div className="dashboard-content-container text-base">
      <h1 className="text-title-section font-bold text-primary-green">
        Panduan Pengguna
      </h1>
      <br />

      <p className="indent-8 text-lg my-2">
        Selamat datang di Prabicara, platform pembelajaran yang dirancang khusus
        untuk mendukung Anda dalam mendampingi perkembangan bicara dan bahasa
        anak Anda. Berikut adalah langkah-langkah sederhana untuk memandu Anda
        melalui website kami:
      </p>
      <br />

      <h3 className="text-title-sub-section font-bold">Memulai</h3>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          <span className="font-semibold">Mengenal Menu</span> : Saat Anda
          masuk, Anda akan melihat menu dengan nomor 1 hingga 11. Anda sekarang
          berada di menu nomor 2, yaitu Panduan Pengguna. Jika Anda belum
          membaca pendahuluan pada menu nomor 1, kami sarankan untuk membacanya
          terlebih dahulu.
        </li>
      </ul>
      <br />

      <h3 className="text-title-sub-section mt-2 font-bold">
        Pelatihan Tahap 1 : Pengenalan
      </h3>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          <span className="font-semibold">Pretest</span> : Saat Anda Klik menu 3
          untuk mengikuti pretest. Ini adalah kuis singkat untuk menilai
          pemahaman awal Anda tentang materi bina bicara.
        </li>
        <li>
          <span className="font-semibold">Materi Pelatihan</span> : Setelah
          pretest, klik menu 4 untuk memulai pelatihan Pengenalan. Anda akan
          menemukan 4 materi: Asesmen, Pernapasan, Organ Bicara, dan Pembentukan
          Suara. Silakan pelajari setiap materi secara berurutan untuk pemahaman
          yang lebih baik.
        </li>
        <li>
          <span className="font-semibold">Post Test</span> : Setelah
          menyelesaikan semua materi, klik menu 5 untuk post test. Ini akan
          mengukur seberapa baik Anda memahami materi yang telah dipelajari.
        </li>
      </ul>
      <br />

      <h3 className="text-title-sub-section mt-2 font-bold">
        Pelatihan Tahap 2 : Huruf Vokal
      </h3>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          <span className="font-semibold">Pretest</span> : Seperti sebelumnya,
          mulai dengan pretest di menu 6.
        </li>
        <li>
          <span className="font-semibold">Pelatihan Vokal</span> : Lanjutkan ke
          menu 7 untuk memulai pelatihan huruf vokal (a, i, u, e, o). Pilih
          latihan sesuai hasil asesmen Anda.
        </li>
        <li>
          <span className="font-semibold">Post Test</span> : Setelah pelatihan,
          klik menu 8 untuk post test dan lihat seberapa jauh kemajuan Anda.
        </li>
      </ul>
      <br />

      <h3 className="text-title-sub-section mt-2 font-bold">
        Pelatihan Tahap 3 : Huruf Konsonan
      </h3>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          <span className="font-semibold">Pretest</span> : S Mulai dengan
          pretest pada menu 9.
        </li>
        <li>
          <span className="font-semibold">Pelatihan Konsonan</span> : Klik menu
          10 untuk memilih dan memulai pelatihan huruf konsonan (B, C, D, J, K,
          M, N, P, S, T, NG). Pilih sesuai dengan hasil asesmen Anda.
        </li>
        <li>
          <span className="font-semibold">Post Test</span> : Setelah
          menyelesaikan pelatihan, klik menu 11 untuk post test terakhir.
        </li>
      </ul>
      <br />

      <p className="text-lg mt-2">
        <span className="font-semibold">Catatan</span> : Setiap tahap pelatihan
        dilengkapi dengan kuis untuk membantu Anda melatih dan mengukur
        pemahaman. Jangan ragu untuk ulang sesi jika Anda merasa perlu.
      </p>
      <p className="text-lg mt-2">
        Dengan mengikuti panduan ini, Anda akan dipandu melalui setiap tahap
        pelatihan untuk membantu anak Anda mengembangkan kemampuan bicaranya.
        Ingat, konsistensi dan kesabaran adalah kunci dalam proses pembelajaran
        ini. Selamat belajar!
      </p>

      <Link href={"/dashboard"} className="btn btn-primary w-full mt-8 mb-4">
        Materi Pelatihan
      </Link>
    </div>
  );
};

export default PanduanPengguna;
