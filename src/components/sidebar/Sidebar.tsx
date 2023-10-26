"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { routes } from "@/app/routes/sidebarRoute";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarSubMenu from "./SidebarSubMenu";

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
    <div className="drawer-side lg:drawer-open">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu  pt-2 w-80 bg-base-100 text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link href={"/dashboard"}>RizalYoga</Link>
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
                      link ${
                        pathname == route.path
                          ? "font-semibold  bg-base-200"
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
