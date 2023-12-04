import React from "react";
import { motion } from "framer-motion";

const Pelaksanaan = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="text-4xl  font-bold text-center lg:text-title-section">
        PELAKSANAAN
      </h1>
      <div className="content-perkembangan text-start">
        <h3 className="title-sub-content mt-8">Pelaksanaan Bina Bicara</h3>

        <p>
          Pelaksanaan bina bicara pada anak tunarungu di rumah dapat lebih
          efektif dengan menggunakan teori yang didasarkan pada reward (hadiah)
          dan pendekatan lainnya. Berikut adalah beberapa strategi yang dapat
          diaplikasikan oleh orang tua:
        </p>
        <br />

        <ul className="list-disc ml-5">
          <li>
            <span className="font-bold">Sistem Reward: </span> Menggunakan
            sistem pahala untuk memotivasi anak. Setiap kali anak berhasil
            melakukan tugas bahasa atau berbicara dengan benar, mereka
            mendapatkan reward seperti pujian, stiker, atau kegiatan favorit
            mereka. Ini mendorong anak untuk terus berlatih dan mengembangkan
            keterampilan bicaranya.
          </li>
          <br />

          <li>
            <span className="font-bold">Modeling (Pemodelan): </span> Orang tua
            dapat menjadi model yang baik dalam berbicara. Menggunakan kata-kata
            dengan jelas dan mengulangi sering kali dapat membantu anak meniru
            dan mempelajari kata-kata tersebut.
          </li>
          <br />

          <li>
            <span className="font-bold">Permainan Interaktif: </span>{" "}
            Menciptakan permainan yang melibatkan bicara dan bahasa, seperti
            tebak kata, permainan memori, atau menyanyi bersama, yang dapat
            membuat proses belajar menjadi menyenangkan.
          </li>
          <br />

          <li>
            <span className="font-bold">Storytelling (Bercerita): </span>{" "}
            Mendongeng dengan ekspresi wajah yang berlebihan dan suara yang
            bervariasi dapat menarik perhatian anak dan membantu mereka memahami
            penggunaan bahasa yang berbeda.
          </li>
          <br />

          <li>
            <span className="font-bold">Penggunaan Visual Aid:</span>{" "}
            Menggunakan bantuan visual seperti kartu kata, buku bergambar, atau
            aplikasi belajar untuk mengenalkan kata-kata baru dan konsep bahasa.
          </li>
          <br />

          <li>
            <span className="font-bold">Desensitisasi Bertahap: </span> Jika
            anak merasa cemas atau takut berbicara, pendekatan bertahap untuk
            memperkenalkan mereka pada situasi bicara dapat membantu mengurangi
            kecemasan mereka.
          </li>
          <br />

          <li>
            <span className="font-bold">Penguatan Positif: </span> Memberikan
            umpan balik positif dan pujian ketika anak mencoba berbicara, bahkan
            jika mereka belum sempurna, untuk meningkatkan kepercayaan diri
            mereka.
          </li>
          <br />

          <li>
            <span className="font-bold"> Membuat Jadwal Teratur:</span>{" "}
            Menetapkan waktu tertentu setiap hari untuk latihan bicara dapat
            membantu anak membangun rutinitas dan konsistensi.
          </li>
          <br />

          <li>
            <span className="font-bold">Interaksi Sosial:</span> Mendorong anak
            untuk berinteraksi dengan teman sebaya atau keluarga untuk
            meningkatkan keterampilan komunikasi sosial mereka.
          </li>
          <br />
        </ul>
        <p>
          Menggabungkan pendekatan-pendekatan ini dengan sabar dan konsistensi
          akan membantu perkembangan bicara dan bahasa anak tunarungu secara
          efektif.
        </p>
      </div>
    </motion.div>
  );
};

export default Pelaksanaan;
