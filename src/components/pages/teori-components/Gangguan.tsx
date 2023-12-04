import React from "react";
import { motion } from "framer-motion";

const Gangguan = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="text-4xl  font-bold text-center lg:text-title-section">
        GANGGUAN
      </h1>
      <div className="content-perkembangan text-start">
        <h3 className="title-sub-content mt-8">
          Gangguan Bicara Pada Anak Tunarungu
        </h3>

        <p>
          Gangguan bicara pada anak tunarungu mencakup beberapa tantangan dan
          masalah spesifik yang terkait dengan pengembangan kemampuan berbicara
          dan berbahasa. Ini termasuk:
        </p>
        <br />

        <ul className="list-disc ml-5">
          <li>
            <span className="font-bold">
              Keterlambatan Perkembangan Bicara:
            </span>{" "}
            Anak tunarungu sering mengalami keterlambatan dalam memulai bicara
            karena hambatan dalam mendengar suara dan bahasa.
          </li>
          <br />

          <li>
            <span className="font-bold">Kesulitan dalam Artikulasi:</span>{" "}
            Mereka mungkin menghadapi kesulitan dalam mengartikulasikan
            kata-kata dengan jelas. Hal ini disebabkan oleh keterbatasan mereka
            dalam mendengar suara, yang membuat sulit bagi mereka untuk meniru
            dan menghasilkan suara yang akurat.
          </li>
          <br />

          <li>
            <span className="font-bold">Penggunaan Bahasa Terbatas:</span> Anak
            tunarungu mungkin memiliki kosa kata yang lebih terbatas dan
            kesulitan dalam menggunakan struktur gramatikal yang kompleks,
            karena hambatan dalam mendengar dan mempraktikkan bahasa
            sehari-hari.
          </li>
          <br />

          <li>
            <span className="font-bold">
              Kesulitan dalam Memahami Aturan Berbicara:
            </span>{" "}
            Ini termasuk kesulitan dalam memahami norma-norma sosial dari
            percakapan, seperti bergantian berbicara, karena mereka mungkin
            tidak sepenuhnya mendengar dan memahami percakapan yang terjadi di
            sekitar mereka.
          </li>
          <br />

          <li>
            <span className="font-bold">
              Ketergantungan pada Komunikasi Non-Verbal:
            </span>{" "}
            Anak tunarungu sering lebih bergantung pada bahasa isyarat, ekspresi
            wajah, dan bentuk komunikasi non-verbal lainnya.
          </li>
          <br />

          <li>
            <span className="font-bold">
              Kesulitan dalam Penerimaan dan Pengolahan Suara:{" "}
            </span>{" "}
            Ini termasuk kesulitan dalam membedakan suara, yang dapat
            mempengaruhi kemampuan untuk memahami dan menghasilkan bahasa secara
            akurat.
          </li>
          <br />

          <li>
            <span className="font-bold">Dampak Sosial dan Emosional: </span>{" "}
            Gangguan bicara seringkali membawa dampak sosial dan emosional,
            seperti kesulitan dalam berinteraksi dengan teman sebaya dan rasa
            frustrasi atau rendah diri karena hambatan komunikasi.
          </li>
          <br />
        </ul>

        <p>
          Pendekatan terapi bicara untuk anak tunarungu memerlukan pendekatan
          khusus yang mungkin melibatkan alat bantu pendengaran, terapi untuk
          memperbaiki artikulasi, latihan bahasa, dan penggunaan teknologi
          komunikatif untuk mendukung perkembangan bicara dan bahasa mereka.
        </p>
      </div>
    </motion.div>
  );
};

export default Gangguan;
