import { AiFillHome, AiOutlineMedium } from "react-icons/ai";
import { TiDownload } from "react-icons/ti";
import {
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAzurepipelines,
  SiHomeassistant,
} from "react-icons/si";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <SiHomeassistant className="-mt-1" />,
  },
  {
    path: "",
    name: "Pengenalan",
    icon: <SiAzurepipelines className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/budek",
        icon: "",
        name: "Budek",
      },
      {
        path: "/dashboard/pembentuk-suara",
        icon: "",
        name: "Pembentuk Suara",
      },
      {
        path: "/dashboard/pernapasan",
        icon: "",
        name: "Pernapasan",
      },
    ],
  },
  {
    path: "",
    name: "Pengucapan Huruf Vokal",
    icon: <SiAdobeillustrator className="-mt-1" />,
    submenu: [
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
    ],
  },
  {
    path: "",
    name: "Pengucapan konsonan",
    icon: <SiAdobelightroom className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/bisu",
        icon: "",
        name: "Bisu",
      },
    ],
  },
];
