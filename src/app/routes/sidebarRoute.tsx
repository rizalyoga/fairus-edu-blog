import { AiFillHome } from "react-icons/ai";
import { BsFillEarFill } from "react-icons/bs";
import { RiSpeakFill } from "react-icons/ri";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <AiFillHome />,
  },
  {
    path: "",
    name: "Tuna Rungu",
    submenu: [
      {
        path: "/budek", //url
        icon: <BsFillEarFill />, // icon component
        name: "Budek", // name that appear in Sidebar
      },
      {
        path: "/bisu",
        icon: <RiSpeakFill />,
        name: "Bisu",
      },
    ],
  },
];
