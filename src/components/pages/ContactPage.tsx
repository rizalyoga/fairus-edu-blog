import React from "react";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import clsx from "clsx";

const ContactPage = () => {
  return (
    <div className="bg-base-100 pt-20">
      <div className={clsx("content-container px-4", "lg:px-2", "xl:px-0")}>
        <div className="m-auto md:w-[70%]">
          <h1 className="text-title-section pt-12 pb-10 font-bold text-primary-green text-center">
            Kontak
          </h1>
          <p className="text-center text-lg">
            Kami Prabicara sangat senang Anda mengunjungi halaman website kami.
            Tim dukungan kami di sini untuk membantu Anda dengan segala
            pertanyaan, masalah, atau masukan yang Anda miliki. Silakan hubungi
            kami dengan salah nomor tim kami yang paling sesuai untuk Anda, dan
            kami akan berusaha memberikan bantuan secepat mungkin.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-h-[400px] mt-16 text-base-content font-bold ">
          <div className="w-full bg-base-200 p-12 flex items-center gap-4 rounded-3xl shadow-lg">
            <HiLocationMarker className="text-8xl md:text-5xl lg:text-3xl" />
            <p className="text-base-content">
              Jl. Raya Kampus Unesa, Lidah Wetan, Kec. Lakarsantri, Surabaya,
              Jawa Timur 60213. Gedung O6 Pendidikan Luar Biasa, Fakultas Ilmu
              Pendidikan. Departamen Unit Layanan Anak Berkebutuhan Khusus.
            </p>
          </div>
          <div className="w-full bg-base-200 p-12 flex items-center gap-4 rounded-3xl shadow-lg">
            <HiPhone className="text-2xl" />
            <div className="flex flex-col flex-start  sm:gap-6 sm:flex-row lg:items-center w-full">
              <p className="text-base-content">+62 858-5345-2369 - Fairus</p>
              <p className="text-base-content">+62 822-5781-5123 - Sibi Dyah</p>
              <p className="text-base-content">+62 858-5082-7520 - Pastri</p>
            </div>
          </div>
          <div className="w-full bg-base-200 p-12 flex flex-col gap-4 rounded-3xl shadow-lg md:flex-row md:items-center flex-wrap">
            <span className="flex gap-4">
              <HiMail className="text-2xl" />
              <p className="text-base-content">fairusniratama@gmail.com</p>
            </span>
            <span className="flex gap-4">
              <BiWorld className="text-2xl" />
              <p className="text-base-content">ulabk.unesa.ac.id</p>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15829.821736929645!2d112.6707497!3d-7.3026198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc5259058fb9%3A0xca2bc9094e88f8db!2sUnit%20Layanan%20Anak%20Berkebutuhan%20Khusus%20(ULABK)%20UNESA!5e0!3m2!1sid!2sid!4v1701005115450!5m2!1sid!2sid"
          loading="lazy"
          className="w-full h-full bg-slate-300"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
