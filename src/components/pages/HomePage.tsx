import React from "react";
import Hero from "../hero/Hero";

const HomePage = () => {
  return (
    <div className="bg-base-100">
      <Hero />
      <div className="content-container py-10 ">
        <h2 className="text-center font-bold text-title text-primary-violet tracking-tighter">
          Getting started online
        </h2>
        <p className="py-10 text-center">
          Kami adalah pakar dalam bidang pendidikan dan terapi anak-anak
          berkebutuhan khusus serta pengembangan potensi anak. Sebagai yayasan
          penyedia layanan pendampingan pendidikan dan terapi, kami memiliki
          tenaga profesional terlatih dan berpengalaman untuk membantu anak-anak
          mencapai potensi terbaik mereka.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
