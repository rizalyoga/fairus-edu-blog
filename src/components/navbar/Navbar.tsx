"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useSpring, useScroll } from "framer-motion";

import clsx from "clsx";

import { CgMenuRightAlt } from "react-icons/cg";

import SidebarFrontPage from "../sidebar/SidebarFrontPage";

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    !pathname.includes("dashboard") && (
      <>
        <SidebarFrontPage isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className="bg-base-100 fixed top-0 w-full z-30 shadow">
          <div
            className={clsx(
              "navbar h-24 content-container w-full flex justify-between items-center px-4",
              "lg:px-2 ",
              "xl:px-0"
            )}
          >
            <div className="navbar-start">
              <Link
                href="/"
                className={clsx(
                  "normal-case text-4xl text-primary-green",
                  "dark:hover:bg-base-100"
                )}
              >
                <p className="font-bold">Parbicara.</p>
              </Link>
            </div>

            <div className="navbar-center gap-6 hidden lg:flex">
              <Link
                href={"/"}
                className={clsx(
                  "cursor-pointer text-base-text -mt-0.5",
                  "hover:underline",
                  pathname == "/"
                    ? "font-bold text-primary-green text-[1.35rem]"
                    : ""
                )}
              >
                Beranda
              </Link>

              <Link
                href={"/materi"}
                className={clsx(
                  "cursor-pointer text-base-text",
                  "hover:underline",
                  pathname == "/materi"
                    ? "font-bold text-primary-green text-[1.35rem]"
                    : ""
                )}
              >
                Materi
              </Link>

              <Link
                href={"/pembelajaran"}
                className={clsx(
                  "cursor-pointer text-base-text",
                  "hover:underline",
                  pathname == "/pembelajaran"
                    ? "font-bold text-primary-green text-[1.35rem]"
                    : ""
                )}
              >
                Pembelajaran
              </Link>

              {/* <Link
                href={"/about"}
                className={clsx(
                  "cursor-pointer text-base-text",
                  "hover:underline",
                  pathname == "/about"
                    ? "font-bold text-primary-green text-[1.35rem] "
                    : ""
                )}
              >
                Tentang
              </Link> */}

              <Link
                href={"/kontak"}
                className={clsx(
                  "cursor-pointer text-base-text",
                  "hover:underline",
                  pathname == "/kontak"
                    ? "font-bold text-primary-green mt-0.5"
                    : ""
                )}
              >
                Kontak
              </Link>
            </div>
            <div className="navbar-end">
              <Link href={"/login"} className="hidden lg:flex">
                <button
                  className={clsx(
                    "btn bg-primary-green px-8 -mr-2",
                    "hover:text-primary-text hover:bg-slate-600"
                  )}
                >
                  <p className="text-white">Log in</p>
                </button>
              </Link>

              <button
                onClick={toggleSidebar}
                className={clsx(
                  " btn bg-primary-green -mr-2 rounded-full flex lg:hidden",
                  "hover:text-primary-text hover:bg-slate-600"
                )}
              >
                <CgMenuRightAlt className="font-bold text-3xl text-white text-center" />
              </button>
            </div>
          </div>
          <motion.div className="progress-bar" style={{ scaleX }} />
        </div>
      </>
    )
  );
};

export default Navbar;
