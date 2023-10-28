"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { routes } from "@/app/routes/sidebarRoute";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarSubMenu from "./SidebarSubMenu";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const pathname = usePathname();

  // const openSidebar = () => {
  //   setIsOpenSidebar((open) => !open);
  // };

  const close = () => {
    const maybeMyElement = document.getElementById("left-sidebar-drawer");
    maybeMyElement && maybeMyElement.click();
  };

  return (
    <div className="drawer-side z-20">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 text-base-content min-h-screen">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-1.5 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <AiOutlineClose />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link href={"/dashboard"}>Rizal Yoga</Link>
        </li>
        {routes.map((route, k) => {
          return (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubMenu {...route} />
              ) : (
                <Link
                  href={route.path}
                  className={`
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
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
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
