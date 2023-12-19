import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "public/assets/logo-prabicara.png";

const PendahuluanWebsite = () => {
  return (
    <div className="dashboard-content-container text-base relative">
      <h1 className="text-title-sub-section font-bold text-primary-green">
        Pendahuluan Website Prabicara
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
      <p className="indent-8 my-2 text-lg">
        Situs Web Prabicara &ldquo;Parenting Bina Bicara&ldquo; adalah platform
        digital yang dirancang untuk membantu orang tua dalam mendukung
        perkembangan bicara dan bahasa bagi anak-anak tunarungu. Dapat diakses
        melalui laptop atau smartphone, Prabicara menyediakan pengalaman
        pengguna yang fleksibel dan mudah, memungkinkan akses ke sumber daya
        kapan saja, di mana saja.
      </p>
      <p className="indent-8 my-2 text-lg">
        Platform ini menawarkan berbagai materi pembelajaran interaktif, teori
        terkait bina bicara, dan alat bantu yang berfokus pada pendekatan
        terstruktur dan efektif untuk pendidikan bahasa. Dengan antarmuka yang
        intuitif, orang tua dan pendidik dapat dengan mudah menavigasi melalui
        berbagai bagian situs, termasuk beranda yang informatif, halaman teori
        mendalam, modul pembelajaran yang terstruktur, dan kontak langsung untuk
        konsultasi dan dukungan.
      </p>
      <p className="indent-8 my-2 text-lg text-left">
        Web Prabicara tidak hanya menjadi sumber daya informatif, tetapi juga
        platform yang memberdayakan, memberikan alat dan pengetahuan yang
        diperlukan untuk membantu perkembangan komunikasi yang penting pada anak
        tunarungu. Dengan web ini, pengalaman parenting menjadi lebih berarti,
        terarah, dan penuh dukungan.
      </p>
      <p className=" my-2 text-lg text-left">
        Adapun Materi yang diajarkan pada web prabicara ini antara lain :
      </p>
      <ul className=" list-disc list-outside ml-5 mt-2 text-lg">
        <li>Pengenalan materi bicara</li>
        <li>Pelatihan mengucapkan huruf vokal</li>
        <li>Pelatihan mengucapkan huruf konsonan</li>
      </ul>
      <Link
        href={"/dashboard/panduan-pengguna"}
        className="btn btn-primary w-full my-8"
      >
        Panduan Pengguna
      </Link>
    </div>
  );
};

export default PendahuluanWebsite;
