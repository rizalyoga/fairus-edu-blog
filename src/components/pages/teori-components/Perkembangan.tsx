import React from "react";
import { motion } from "framer-motion";

const Perkembangan = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="text-4xl  font-bold text-center lg:text-title-section">
        PERKEMBANGAN
      </h1>
      <div className="content-perkembangan text-start">
        <h3 className="title-sub-content mt-8">
          Perkembangan Bahasa dan Bicara
        </h3>
        <p>
          Perkembangan bahasa dan bicara adalah aspek kunci dari komunikasi
          manusia, melibatkan ide, informasi, dan emosi. Bicara menghubungkan
          kita dengan lingkungan melalui tuturan. Dalam terapi bicara, kerjasama
          dengan profesional lain diperlukan untuk mencapai komunikasi yang
          optimal. Gangguan bahasa bisa berakibat pada kesulitan belajar dan
          sosialisasi hingga remaja. Proses bicara melibatkan sensorik dan
          motorik, dan memahami perkembangan normal anak penting untuk mengenali
          gangguan bahasa dan bicara. Perkembangan bahasa terbagi menjadi
          beberapa tahapan, mulai dari pra lingual (0-1½ tahun), lingual dini
          (1½-2½ tahun), hingga tingkatan lanjutan setelah anak berusia 5 tahun.
        </p>

        <h3 className="title-sub-content">Pra Lingual</h3>
        <p>
          Fase Pra Lingual pada bayi dimulai dengan tangisan pertama saat lahir,
          yang berfungsi membersihkan paru-paru dari cairan amnion dan memulai
          pernapasan. Tangisan awal ini bertujuan melatih pita suara. Seiring
          bertambahnya usia, cara menangis bayi berubah menjadi ekspresi
          ketidaknyamanan, seperti lapar atau sakit, dan juga ekspresi
          kebahagiaan, yang merupakan latihan bersuara awal.
        </p>
        <br />
        <p>
          Pada usia sekitar 6 minggu, bayi mulai mengurangi tangisan sebagai
          ekspresi kebahagiaan dan menggantikannya dengan suara yang mirip vokal
          (a, o, e). Interaksi dengan orang sekitar melalui suara dan reaksi
          seperti tertawa atau menirukan suara menjadi bentuk komunikasi awal
          yang sederhana tapi penting untuk perkembangan bahasa.
        </p>
        <br />
        <p>
          Sekitar usia 4 hingga 8 bulan, bayi mulai bermain dengan mulut dan
          menghasilkan berbagai suara, termasuk konsonan. Fase ini penting
          karena bayi belajar suara dari lingkungannya dan mulai menghilangkan
          suara yang tidak terdapat dalam bahasa lingkungan tersebut. Anak
          tunarungu yang tidak mendapat stimulasi khusus untuk perkembangan
          bahasa mungkin mengalami penurunan atau kehilangan kemampuan mengoceh.
        </p>
        <br />
        <p>
          Pada usia 8 bulan, bayi mulai mengungkapkan suara dengan intonasi yang
          menyerupai kalimat, menyampaikan rasa dan keinginan. Anak
          menyelesaikan fase jargon antara usia 9 sampai 12 bulan, di mana satu
          suara dapat memiliki berbagai arti tergantung konteksnya.
        </p>

        <h3 className="title-sub-content">Lingual Dini</h3>
        <p>
          Pada Masa Lingual Dini, sekitar umur 12 bulan, anak mulai membentuk
          kalimat sederhana dengan satu kata dan mengenali lambang atau
          kata-kata tertentu yang berkaitan dengan orang atau situasi. Mereka
          mulai memahami dan menggunakan bahasa sebenarnya, di mana pemahaman
          simbol lebih penting daripada kejelasan ucapan. Perkembangan ucapan
          ini berlanjut hingga usia 4 atau 5 tahun.
        </p>
        <br />
        <p>
          Pada tahap ini, cara anak mengucapkan kata pertama beragam. Beberapa
          melanjutkan dari fase yargon, secara bertahap mengucapkan kata-kata
          yang dapat dimengerti. Perbendaharaan kata anak berkembang, sementara
          ngocoeh berkurang. Anak yang lebih muda cenderung kurang jelas dalam
          pengucapan, sedangkan anak yang lebih tua biasanya lebih jelas. Pada
          usia satu setengah tahun, anak biasanya memiliki kisaran 3 hingga 50
          kata dalam perbendaharaannya.
        </p>

        <h3 className="title-sub-content">Tingkatan Lanjut</h3>
        <p>
          Pada Masa Tingkatan Lanjutan Bahasa, anak mulai membentuk kalimat dari
          dua kata atau lebih, menggunakan bahasa untuk berkomunikasi dengan
          orang lain. Meskipun masih ada percakapan pada diri sendiri, anak-anak
          mulai mengembangkan tata bahasa dengan menghubungkan dua kata menjadi
          satu kalimat.
        </p>
        <br />
        <p>
          Sekitar usia 2 tahun, anak-anak mulai mengungkapkan perasaan dengan
          kalimat tiga kata, meski beberapa masih menggunakan dua kata.
          Perbendaharaan kata mereka bertambah setiap hari, tetapi tata bahasa
          dan ucapan belum sempurna. Sikap orang tua terhadap perkembangan
          bahasa anak sangat penting. Pada usia 2 tahun, anak-anak bisa mengerti
          apa yang dikatakan kepadanya dan sekitar usia 2½ tahun, mereka hampir
          tidak lagi mengoceh. Pada usia ini, anak bisa menggunakan sekitar 200
          hingga 900 kata, dan 80% ucapannya bisa dimengerti oleh orang asing.
          Kemampuan menyusun bahasa anak pun semakin meningkat.
        </p>
        <br />
        <p>
          Anak berusia 4 tahun hampir menguasai bahasa, dan biasanya anak usia 6
          atau 7 tahun sudah menyelesaikan perkembangan bahasa, termasuk ucapan
          dan struktur kalimat, dengan perbendaharaan kata yang terus
          berkembang.
        </p>

        <h3 className="title-sub-content">
          Perkembangan Bicara dan Bahasa yang Normal
        </h3>

        <h5 className="font-bold">0 - 6 Bulan</h5>
        <ul className="list-disc ml-5">
          <li>Mengulangi Suara yang sama</li>
          <li>Mengunakan konsonan /b/./m/,/p/ ketika babbling</li>
          <li>Mengenali suara manusia</li>
          <li>Melokalisasi suara dengan cara menolehkan kepala</li>
          <li>Tersenyum bila diajak berbicara</li>
        </ul>
        <br />

        <h5 className="font-bold">7 - 12 Bulan</h5>
        <ul className="list-disc ml-5">
          <li>Mengerti dan memberi respon pada namanya sendiri.</li>
          <li>Menggunakan suara selain tangisan untuk mendapatkan perhatian</li>
          <li>Dapat memberi respon untuk perintah sederhana</li>
          <li>
            Mengenali beberapa kata benda di sekitarnya Mulai merubah babbling
            ke jargon
          </li>
          <li>Mulai berbicara bertujuan</li>
        </ul>
        <br />

        <h5 className="font-bold">13 - 18 Bulan</h5>
        <ul className="list-disc ml-5">
          <li>Menggunakan intonasi yang mengikuti pola bicara orang dewasa</li>
          <li>
            Tidak mengucapkan konsonan depan dan hampir secara keseluruhan
            konsonan akhir
          </li>
          <li> Bicara hampir tidak dapat dimengerti</li>
          <li>Memiliki kosa kata 3–20 kata atau lebih kebanyakan kata benda</li>
          <li> Mengikuti perintah sederhana</li>
        </ul>
        <br />

        <h5 className="font-bold">19 - 24 Bulan</h5>
        <ul className="list-disc ml-5">
          <li>
            Memiliki pengucapan (ekspresif) kosa kata 50–100 kata atau lebih
          </li>
          <li>Memiliki pemahaman (reseptif) kosa kata 300 kata atau lebih</li>
          <li>
            Mulai memadu kata benda dan kata kerja Menjawab pertanyaan “ini
            apa?”
          </li>
          <li>Mengenali lima bagian tubuh Bicara 25–50 % dapat dimengerti</li>
        </ul>
        <br />

        <h5 className="font-bold">2 - 3 Tahun</h5>
        <ul className="list-disc ml-5">
          <li>Bicara 50–75 % dapat dimengerti</li>
          <li>Mengucapkan keinginannya dengan bahasa verbal</li>
          <li>
            Mengikuti perintah sederhana dan menjawab pertanyaan sederhana
          </li>
          <li>Mulai senang mendengar cerita pendek</li>
          <li>Mulai mengerti fungsi benda</li>
          <li>Mulai memahami warna dasar</li>
        </ul>
        <br />

        <h5 className="font-bold">3 - 4 Tahun</h5>
        <ul className="list-disc ml-5">
          <li>Mengerti fungsi benda dan warna</li>
          <li>Mengerti perbedaan arti kata</li>
          <li>Bertanya dan menjawab pertanyaan siapa, apa, di mana, kenapa</li>
          <li>Sering bertanya dan meminta jawaban yang terperinci</li>
          <li>Menggunakan 4–5 kata dalam satu kalimat</li>
          <li>Bicara 80% dapat dimengerti</li>
          <li>Memanipulasi orang dewasa dan teman sebaya</li>
        </ul>
        <br />

        <h5 className="font-bold">4 -5 Tahun</h5>
        <ul className="list-disc ml-5">
          <li>Menggunakan konsonan dengan 90% dengan tepat</li>
          <li>Bicara biasanya dapat dimengerti oleh orang luar</li>
          <li>Mulai dapat menceritakan pengalamannya</li>
          <li>Menggunakan kalimat dengan 4–8 kata dalam satu kalimat</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Perkembangan;
