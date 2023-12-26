import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "public/assets/logo-prabicara.png";

const PendahuluanWebsite = () => {
  return (
    <div className="dashboard-content-container text-base relative">
      <h1 className="text-title-section font-bold text-primary-green">
        Website Prabicara
      </h1>
      <div className="content-page flex justify-center items-center flex-col">
        <Image
          src={Logo}
          width={240}
          height={240}
          alt="logo-prabicara"
          placeholder="blur"
          className="my-8"
        />
      </div>

      <h3 className="text-title-sub-section font-bold">Latar Belakang</h3>
      <p className="indent-8 my-2 text-lg">
        Situs Web Prabicara “
        <span className="font-semibold">Parenting Bina Bicara</span>” adalah
        platform digital inovatif yang dirancang khusus untuk mendukung orang
        tua dalam memfasilitasi perkembangan bicara dan bahasa bagi anak-anak
        tunarungu. Dengan kemudahan akses melalui laptop atau smartphone,
        Prabicara menyediakan sumber daya kapan saja dan di mana saja,
        menawarkan fleksibilitas maksimal dalam pendidikan dan terapi bahasa.
      </p>
      <br />
      <h3 className="text-title-sub-section font-bold">Fitur dan Materi</h3>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          <span className="font-semibold">Pengenalan Materi Bina Bicara</span> :
          Mencakup dasar-dasar terapi bicara yang diperlukan untuk memulai
          pendidikan bahasa yang efektif. Materi ini mencakup asesmen kemampuan
          bicara, pelatihan pernafasan, pelemasan organ bicara, serta latihan
          pembentukan suara.
        </li>
        <li>
          <span className="font-semibold">
            Pelatihan Mengucapkan Huruf Vokal
          </span>{" "}
          : Teknik dan latihan untuk membantu anak menguasai suara vokal.
        </li>
        <li>
          <span className="font-semibold">
            Pelatihan Mengucapkan Huruf Konsonan
          </span>{" "}
          : Metode untuk mengajarkan anak mengucapkan konsonan dengan jelas dan
          tepat.
        </li>
      </ul>
      <br />

      <h3 className="text-title-sub-section font-bold">Tujuan</h3>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          Memberikan akses kepada orang tua ke sumber daya berkualitas untuk
          mendukung perkembangan bicara dan bahasa anak tunarungu.
        </li>
        <li>
          Mendorong interaksi dan komunikasi yang efektif antara anak dan orang
          tua melalui materi pembelajaran yang terstruktur.
        </li>
        <li>
          Meningkatkan kesadaran dan pemahaman tentang metode dan teknik
          pendidikan bahasa untuk anak tunarungu.
        </li>
      </ul>
      <br />

      <h3 className="text-title-sub-section font-bold">Manfaat</h3>
      <p className="mt-2 text-lg">
        Dengan menggunakan website prabicara, orang tua dapat :
      </p>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          Memperoleh pengetahuan dan keterampilan yang diperlukan untuk
          mendukung perkembangan bicara dan bahasa anak.
        </li>
        <li>
          Mengakses materi pembelajaran interaktif yang dirancang untuk
          memudahkan proses pembelajaran dan pengajaran.
        </li>
        <li>
          Mendapatkan dukungan dan konsultasi dari para ahli melalui platform.
        </li>
      </ul>
      <br />

      <h3 className="text-title-sub-section font-bold">Keunggulan</h3>
      <ul className="list-disc list-outside ml-6 text-lg mt-2">
        <li>
          <span className="font-semibold">Fleksibel dan Mudah Diakses</span> :
          Dapat diakses kapan saja, dari perangkat apa saja.
        </li>
        <li>
          <span className="font-semibold">Antarmuka yang Intuitif</span> :
          Memudahkan navigasi dan pemahaman materi.
        </li>
        <li>
          <span className="font-semibold">Konten Berkualitas Tinggi</span> :
          Dikembangkan oleh para ahli dalam pendidikan bicara dan bahasa.
        </li>
      </ul>
      <br />

      <p className="text-lg">
        Untuk memulai pembelajaran, silahkan klik tombol panduan pengguna
        berikut
      </p>

      <Link
        href={"/dashboard/panduan-pengguna"}
        className="btn btn-primary w-full mt-8 mb-4"
      >
        Panduan Pengguna
      </Link>
    </div>
  );
};

export default PendahuluanWebsite;
