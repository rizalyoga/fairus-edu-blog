import {
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAzurepipelines,
  SiHomeassistant,
  SiPlausibleanalytics,
} from "react-icons/si";

import { BsPersonVideo3 } from "react-icons/bs";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <SiHomeassistant className="-mt-1" />,
  },

  {
    path: "",
    name: "Pengenalan",
    icon: <BsPersonVideo3 className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/pengenalan-pretest",
        icon: <SiPlausibleanalytics className="-mt-1" />,
        name: "Pretest",
      },
      {
        path: "/dashboard/assesmen",
        icon: "",
        name: "Assesmen",
      },
      {
        path: "/dashboard/pernapasan",
        icon: "",
        name: "Pernapasan",
      },
      {
        path: "/dashboard/pelemasan-organ-bicara",
        icon: "",
        name: "Organ Bicara",
      },
      {
        path: "/dashboard/pembentuk-suara",
        icon: "",
        name: "Pembentuk Suara",
      },
      // {
      //   path: "/dashboard/budek",
      //   icon: "",
      //   name: "Budek",
      // },
      {
        path: "/dashboard/pengenalan-postest",
        icon: <SiPlausibleanalytics className="-mt-1" />,
        name: "Post test",
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
      },
      {
        path: "/dashboard/vokal-a",
        icon: "",
        name: "Pengucapan Vokal A",
      },
      {
        path: "/dashboard/vokal-i",
        icon: "",
        name: "Pengucapan Vokal I",
      },
      {
        path: "/dashboard/vokal-u",
        icon: "",
        name: "Pengucapan Vokal U",
      },
      {
        path: "/dashboard/vokal-e",
        icon: "",
        name: "Pengucapan Vokal E",
      },
      {
        path: "/dashboard/vokal-o",
        icon: "",
        name: "Pengucapan Vokal O",
      },
      {
        path: "/dashboard/pengucapan-vokal-postest",
        icon: "",
        name: "Post test",
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
      },
      {
        path: "/dashboard/konsonan-b",
        icon: "",
        name: "Konsonan B",
      },
      {
        path: "/dashboard/konsonan-c",
        icon: "",
        name: "Konsonan C",
      },
      {
        path: "/dashboard/konsonan-d",
        icon: "",
        name: "Konsonan D",
      },
      {
        path: "/dashboard/konsonan-j",
        icon: "",
        name: "Konsonan J",
      },
      {
        path: "/dashboard/konsonan-k",
        icon: "",
        name: "Konsonan K",
      },
      {
        path: "/dashboard/konsonan-m",
        icon: "",
        name: "Konsonan M",
      },
      {
        path: "/dashboard/konsonan-n",
        icon: "",
        name: "Konsonan N",
      },
      {
        path: "/dashboard/konsonan-p",
        icon: "",
        name: "Konsonan P",
      },
      {
        path: "/dashboard/konsonan-s",
        icon: "",
        name: "Konsonan S",
      },
      {
        path: "/dashboard/konsonan-t",
        icon: "",
        name: "Konsonan T",
      },
      {
        path: "/dashboard/konsonan-ng",
        icon: "",
        name: "Konsonan NG",
      },
      {
        path: "/dashboard/konsonan-postest",
        icon: "",
        name: "Post test",
      },
    ],
  },
];
