import React from "react";

const Penutup = () => {
  return (
    <div className="paragraph-wrapper">
      <p>Ringkasan</p>
      <br />
      <ul className="list-decimal-style ">
        <li>
          <span className="font-bold">Latihan Pernafasan: </span>
          Anak-anak diajak untuk melakukan latihan pernafasan, termasuk meniup
          potongan kertas dan peluit.
        </li>
        <li>
          <span className="font-bold">Latihan Pelemasan Organ Bicara: </span>
          Latihan ini melibatkan gerakan bibir, lidah, dan rahang, seperti
          menjulurkan lidah dan membuka serta menutup mulut.
        </li>
        <li>
          <span className="font-bold">
            Mengucapkan Huruf Vokal &apos;A&apos;:{" "}
          </span>
          Anak-anak diajak untuk mengucapkan &apos;a&apos; dengan bibir terbuka
          lebar, lidah datar, dan rahang turun.
        </li>
        <li>
          <span className="font-bold"> Rasakan Getaran: </span>
          Anak-anak diajak untuk merasakan getaran di leher saat mengucapkan
          &apos;a&apos;.
        </li>
        <li>
          <span className="font-bold">
            {" "}
            Pengucapan &apos;A&apos; dalam Kata:{" "}
          </span>
          Latihan melibatkan pengucapan &apos;a&apos; di awal, tengah, dan akhir
          kata. Kata-kata yang digunakan dalam latihan termasuk :
          <br />
          <ul className="list-disc list-outside ml-6">
            <li>
              Awal kata: &quot;apel&quot;, &quot;api&quot;, &quot;air&quot;
            </li>
            <li>
              Tengah kata: &quot;batu&quot;, &quot;sapi&quot; &quot;kaki&quot;
            </li>
            <li>
              Akhir kata: &quot;bola&quot;, &quot;mata&quot; &quot;pita&quot;
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Penutup;
