import { AiFillHome } from "react-icons/ai";
import { BsFillEarFill } from "react-icons/bs";
import { RiSpeakFill } from "react-icons/ri";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <AiFillHome className="-mt-1" />,
  },
  {
    path: "",
    name: "Tuna Rungu",
    icon: <BsFillEarFill className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/budek",
        icon: "",
        name: "Budek",
      },
    ],
  },
  {
    path: "",
    name: "Tuna Wicara",
    icon: <RiSpeakFill className="-mt-1" />,
    submenu: [
      {
        path: "/dashboard/bisu",
        icon: "",
        name: "Bisu",
      },
    ],
  },
];
