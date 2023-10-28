"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const HeaderDashboard = () => {
  const router = useRouter();
  const pathname = usePathname();

  const logoutHandler = () => {
    router.push("/login");
  };

  function getPathnamePage(link: string): string {
    // Menghilangkan karakter "/" di awal atau akhir jika ada
    link = link.trim().replace(/^\/+|\/+$/g, "");

    // Membagi link menjadi segmen berdasarkan tanda "/"
    const pathSegments = link.split("/");

    // Mengambil kata terakhir sebelum tanda "/"
    if (pathSegments.length > 0) {
      const pathNamePage = pathSegments[pathSegments.length - 1];
      return pathNamePage.charAt(0).toUpperCase() + pathNamePage.slice(1);
    } else {
      return "";
    }
  }

  return (
    <div className="navbar sticky top-0 flex justify-between bg-base-100 z-10 shadow-md">
      <label
        htmlFor="left-sidebar-drawer"
        className="btn btn-primary drawer-button lg:hidden"
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
      </label>
      <h1 className="text-2xl font-semibold ml-2">
        {getPathnamePage(pathname)}
      </h1>
      <div>
        <button
          className="btn btn-ghost bg-primary-violet text-white font-bold hover:text-primary-text"
          onClick={() => logoutHandler()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderDashboard;
