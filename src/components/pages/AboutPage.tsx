import React from "react";

const About = () => {
  return (
    <div className="bg-base-100 pt-20">
      <div className="content-container px-4 lg:px-0">
        <div className="about w-[80%] m-auto pb-16">
          <div className="about-us pt-12">
            <h1 className="text-title-section font-bold text-primary-green text-center">
              About Us
            </h1>
            <p className="py-10 text-center text-base-content text-lg">
              Berdiri sejak tahun 2010 dan disahkan menjadi Lembaga resmi
              Yayasan Athalia Berkat Anugerah pada tahun 2022. Pelayanan kami
              diawali dari memberikan pelayanan tenaga Shadow Teacher atau
              pelayanan guru pendamping anak berkebutuhan khusus di sekolah,
              kemudian berkembang sesuai kebutuhan masyarakat dengan memberikan
              pelayanan terapi perilaku, remidial teaching dan home program,
              dilanjutan saat ini mengembangkan pelayanan asesmen bagi anak
              berkebutuhan khusus, workshop, parenting, serta konsultasi
              pembelajaran.
            </p>
          </div>
          <div className="vision text-lg">
            <h1 className="text-title-sub-section font-bold text-base-content text-center">
              Vision
            </h1>
            <p className="text-center py-10 px-10 text-base-content">
              Menjadi sahabat orang tua mendampingi anak berkebutuhan khusus
              untuk mencapai level terbaik anak
            </p>
          </div>
          <div className="Mission text-lg">
            <h1 className="text-title-sub-section py-10 font-bold text-base-content text-center">
              Missions
            </h1>
            <ol className="list-decimal text-base-content">
              <li>
                Melayani konsultasi anak berkebutuhan khusus dan memberikan
                intervensi yang tepat sesuai kebutuhan anak.
              </li>

              <li>
                Melayani pendampingan anak berkebutuhan khusus di sekolah,
                dengan menjembatani orang tua dengan sekolah.
              </li>

              <li>
                Melayani home program yang sesuai dengan kebutuhan anak di
                rumah.
              </li>

              <li>
                Melayani remidial teaching untuk anak berkebutuhan khusus secara
                akademik dan life skill.
              </li>

              <li>
                Melayani terapi perilaku anak berekebutuhan khusus untuk
                meningkatkan keterampilan komunikasi, mengurangi perilaku
                bermasalah agar memperoleh keterampilan adaptif.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
