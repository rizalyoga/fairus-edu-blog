"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import SidebarSubMenu from "./SidebarSubMenu";
import { routes } from "@/routes/sidebarRoute";
import { StudentDataProps } from "@/types/types";

interface StudentData extends StudentDataProps {
  token: string;
}

const Sidebar = () => {
  const pathname = usePathname();
  const [studentData, setStudentData] = useState<StudentData>();

  const close = () => {
    const maybeMyElement = document.getElementById("left-sidebar-drawer");
    maybeMyElement && maybeMyElement.click();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setStudentData(JSON.parse(sessionStorage.getItem("student") as string));
    }
  }, []);

  return (
    <div className="drawer-side z-20">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 text-base-content min-h-screen">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-2 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <AiOutlineClose />
        </button>

        <li className="mb-2 mt-1 font-bold text-xl">
          <Link href={"/dashboard"} className="hover:bg-base-100">
            <BsPersonCircle className="text-3xl -mt-1" />
            {`${studentData?.firstname} ${studentData?.lastname}`}
          </Link>
        </li>
        {routes.map((route, idx) => {
          return (
            <li key={idx}>
              {route.submenu ? (
                <SidebarSubMenu {...route} />
              ) : (
                <Link
                  href={route.path}
                  className={`text-lg py-4
                       ${
                         pathname == route.path
                           ? "font-bold bg-base-200"
                           : "font-normal"
                       } 
                    `}
                >
                  {route.icon} {route.name}
                  {pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary-violet "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
