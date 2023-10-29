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
      <div className="navbar justify-between bg-base-100">
        <div className="navbar-start">
          <Link
            href="/"
            className={clsx(
              "btn btn-ghost normal-case text-3xl text-primary-green flex items-center",
              "hover:bg-white",
              "dark:hover:bg-base-100"
            )}
          >
            <FaSchoolFlag /> <p className="mt-1.5">School</p>
          </Link>
        </div>
        <div className="navbar-center gap-6">
          <Link
            href={"/"}
            className={clsx("cursor-pointer text-base-text", "hover:underline")}
          >
            Home
          </Link>

          <Link
            href={"/"}
            className={clsx("cursor-pointer text-base-text", "hover:underline")}
          >
            About
          </Link>
          <Link
            href={"/"}
            className={clsx("cursor-pointer text-base-text", "hover:underline")}
          >
            Lessons
          </Link>
          <Link
            href={"/"}
            className={clsx("cursor-pointer text-base-text", "hover:underline")}
          >
            Contact
          </Link>
        </div>
        <div className="navbar-end">
          <Link href={"/login"}>
            <button
              className={clsx(
                "btn bg-primary-green px-8 mr-5",
                "hover:text-primary-text hover:bg-slate-600"
              )}
            >
              <p className="text-white">Login</p>
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default Navbar;
