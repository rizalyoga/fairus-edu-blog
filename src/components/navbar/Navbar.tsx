"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSchoolFlag } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  return (
    !pathname.includes("dashboard") && (
      <div className="bg-base-100">
        <div className=" navbar content-container w-full flex justify-between items-center">
          <div className="navbar-start">
            <Link
              href="/"
              className={clsx(
                "normal-case text-3xl text-primary-green flex items-center gap-2 ",
                "hover:bg-white",
                "dark:hover:bg-base-100"
              )}
            >
              <FaSchoolFlag /> <p className="mt-1.5 font-bold">School</p>
            </Link>
          </div>
          <div className="navbar-center gap-6">
            <Link
              href={"/"}
              className={clsx(
                "cursor-pointer text-base-text",
                "hover:underline",
                pathname == "/" ? "font-bold text-primary-green mt-0.5" : ""
              )}
            >
              Home
            </Link>

            <Link
              href={"/about"}
              className={clsx(
                "cursor-pointer text-base-text",
                "hover:underline",
                pathname == "/about"
                  ? "font-bold text-primary-green mt-0.5"
                  : ""
              )}
            >
              About
            </Link>
            <Link
              href={"/lessons"}
              className={clsx(
                "cursor-pointer text-base-text",
                "hover:underline",
                pathname == "/lessons"
                  ? "font-bold text-primary-green mt-0.5"
                  : ""
              )}
            >
              Lessons
            </Link>
            <Link
              href={"/contact"}
              className={clsx(
                "cursor-pointer text-base-text",
                "hover:underline",
                pathname == "/contact"
                  ? "font-bold text-primary-green mt-0.5"
                  : ""
              )}
            >
              Contact
            </Link>
          </div>
          <div className="navbar-end">
            <Link href={"/login"}>
              <button
                className={clsx(
                  "btn bg-primary-green px-8 -mr-2",
                  "hover:text-primary-text hover:bg-slate-600"
                )}
              >
                <p className="text-white">Login</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Navbar;
