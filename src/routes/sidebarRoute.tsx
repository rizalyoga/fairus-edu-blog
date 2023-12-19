import {
  SiAdobeillustrator,
  SiAdobelightroom,
  SiHomeassistant,
  SiPlausibleanalytics,
  SiGitextensions,
  SiGooglescholar,
  SiPowerbi,
} from "react-icons/si";

// import { BsPersonVideo3 } from "react-icons/bs";

export const routes = [
  {
    path: "/dashboard",
    name: "Panduan",
    icon: <SiGitextensions className="-mt-1" />,
  },

  {
    path: "/dashboard/nilai",
    name: "Daftar Nilai",
    icon: <SiPowerbi className="-mt-1" />,
  },

  {
    path: "",
    name: "Pengenalan",
    icon: <SiGooglescholar className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/pengenalan-pretest",
        icon: <SiPlausibleanalytics className="-mt-1" />,
        name: "Pretest",
        columnName: "pengenalan_pretest",
      },
      {
        path: "/dashboard/assesmen",
        icon: "",
        name: "Assesmen",
        columnName: "video_assesmen_score",
      },
      {
        path: "/dashboard/pernapasan",
        icon: "",
        name: "Pernapasan",
        columnName: "video_pernapasan",
      },
      {
        path: "/dashboard/pelemasan-organ-bicara",
        icon: "",
        name: "Organ Bicara",
        columnName: "video_organ_bicara",
      },
      {
        path: "/dashboard/pembentuk-suara",
        icon: "",
        name: "Pembentuk Suara",
        columnName: "video_pembentuk_suara",
      },
      {
        path: "/dashboard/pengenalan-postest",
        icon: <SiPlausibleanalytics className="-mt-1" />,
        name: "Post test",
        columnName: "pengenalan_post_test",
      },
    ],
  },

  {
    path: "",
    name: "Pengucapan Huruf Vokal",
    icon: <SiAdobeillustrator className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/pengucapan-vokal-pretest",
        icon: "",
        name: "Pretest",
        columnName: "vokal_pretest",
      },
      {
        path: "/dashboard/vokal-a",
        icon: "",
        name: "Vokal A",
        columnName: "video_vokal_a_score",
      },
      {
        path: "/dashboard/vokal-i",
        icon: "",
        name: "Vokal I",
        columnName: "video_vokal_i_score",
      },
      {
        path: "/dashboard/vokal-u",
        icon: "",
        name: "Vokal U",
        columnName: "video_vokal_u_score",
      },
      {
        path: "/dashboard/vokal-e",
        icon: "",
        name: "Vokal E",
        columnName: "video_vokal_e_score",
      },
      {
        path: "/dashboard/vokal-o",
        icon: "",
        name: "Vokal O",
        columnName: "video_vokal_o_score",
      },
      {
        path: "/dashboard/pengucapan-vokal-postest",
        icon: "",
        name: "Post test",
        columnName: "vokal_post_test",
      },
    ],
  },
  {
    path: "",
    name: "Pengucapan konsonan",
    icon: <SiAdobelightroom className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/konsonan-pretest",
        icon: "",
        name: "Pretest",
        columnName: "konsonan_pretest",
      },
      {
        path: "/dashboard/konsonan-b",
        icon: "",
        name: "Konsonan B",
        columnName: "video_kon_b_score",
      },
      {
        path: "/dashboard/konsonan-c",
        icon: "",
        name: "Konsonan C",
        columnName: "video_kon_c_score",
      },
      {
        path: "/dashboard/konsonan-d",
        icon: "",
        name: "Konsonan D",
        columnName: "video_kon_d_score",
      },
      {
        path: "/dashboard/konsonan-j",
        icon: "",
        name: "Konsonan J",
        columnName: "video_kon_j_score",
      },
      {
        path: "/dashboard/konsonan-k",
        icon: "",
        name: "Konsonan K",
        columnName: "video_kon_k_score",
      },
      {
        path: "/dashboard/konsonan-m",
        icon: "",
        name: "Konsonan M",
        columnName: "video_kon_m_score",
      },
      {
        path: "/dashboard/konsonan-n",
        icon: "",
        name: "Konsonan N",
        columnName: "video_kon_n_score",
      },
      {
        path: "/dashboard/konsonan-p",
        icon: "",
        name: "Konsonan P",
        columnName: "video_kon_p_score",
      },
      {
        path: "/dashboard/konsonan-s",
        icon: "",
        name: "Konsonan S",
        columnName: "video_kon_s_score",
      },
      {
        path: "/dashboard/konsonan-t",
        icon: "",
        name: "Konsonan T",
        columnName: "video_kon_t_score",
      },
      {
        path: "/dashboard/konsonan-ng",
        icon: "",
        name: "Konsonan NG",
        columnName: "video_kon_ng_score",
      },
      {
        path: "/dashboard/konsonan-postest",
        icon: "",
        name: "Post test",
        columnName: "konsonan_post_test",
      },
    ],
  },
];
