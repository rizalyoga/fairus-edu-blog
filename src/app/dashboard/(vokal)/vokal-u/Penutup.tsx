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
          <span className="font-bold">
            Mengucapkan Huruf Vokal &apos;U&apos;:{" "}
          </span>
          Anak-anak diajak untuk mengucapkan huruf vokal &apos;u&apos; dengan
          bibir dibundarkan sempit, ujung lidah mendekati gigi bawah, daun lidah
          ditarik ke belakang, dan rahang turun sedikit.
        </li>
        <li>
          <span className="font-bold"> Rasakan Getaran: </span>
          Anak-anak diajak untuk merasakan getaran di tenggorokan saat
          mengucapkan &apos;u&apos;.
        </li>
        <li>
          <span className="font-bold">
            {" "}
            Pengucapan &apos;U&apos; dalam Kata:{" "}
          </span>
          Latihan melibatkan pengucapan &apos;u&apos; di awal, tengah, dan akhir
          kata. Kata-kata yang digunakan dalam latihan termasuk:
          <br />
          <ul className="list-disc list-outside ml-6">
            <li>
              Awal kata: &quot;ulat&quot;, &quot;ular&quot;, &quot;udang&quot;
            </li>
            <li>
              Tengah kata: &quot;gaun&quot;, &quot;kuda&quot; &quot;daun&quot;
            </li>
            <li>
              Akhir kata: &quot;buku&quot;, &quot;duku&quot; &quot;susu&quot;
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Penutup;
