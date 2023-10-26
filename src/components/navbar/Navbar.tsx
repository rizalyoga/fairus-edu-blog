"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    !pathname.includes("dashboard") && (
      <div className="navbar justify-between bg-base-100">
        <div className="navbar-start">
          <Link
            href="/"
            className={clsx(
              "btn btn-ghost normal-case text-xl text-primary-green",
              "hover:bg-white"
            )}
          >
            Tuna Bisa
          </Link>
        </div>
        <div className="navbar-center gap-6">
          <Link
            href={"/"}
            className={clsx("cursor-pointer", "hover:underline")}
          >
            Home
          </Link>

          <Link
            href={"/"}
            className={clsx("cursor-pointer", "hover:underline")}
          >
            About
          </Link>
          <Link
            href={"/"}
            className={clsx("cursor-pointer", "hover:underline")}
          >
            Lessons
          </Link>
          <Link
            href={"/"}
            className={clsx("cursor-pointer", "hover:underline")}
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
