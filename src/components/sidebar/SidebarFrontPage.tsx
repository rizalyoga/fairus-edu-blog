import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarFrontPage = ({ isOpen, onClose }: any) => {
  const pathname = usePathname();
  const activeLinkStyle = "bg-primary-green text-white";

  return (
    <div
      className={`drawer drawer-end z-30 overscroll-none ${
        isOpen ? "drawer-open fixed top-0" : ""
      }`}
    >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <label
        htmlFor="my-drawer-4"
        className="drawer-overlay bg-slate-700 opacity-40"
        onClick={onClose}
      ></label>
      <div className="drawer-side mt-24 ">
        <ul className="menu p-4 w-80 min-h-screen bg-base-100 text-base-content overscroll-none">
          {/* Your sidebar content */}
          <li className="text-2xl py-2" onClick={onClose}>
            <Link href="/" className={pathname == "/" ? activeLinkStyle : ""}>
              Beranda
            </Link>
          </li>

          <li className="text-2xl py-2" onClick={onClose}>
            <Link
              href="/teori"
              className={pathname == "/teori" ? activeLinkStyle : ""}
            >
              Teori
            </Link>
          </li>

          <li className="text-2xl py-2" onClick={onClose}>
            <Link
              href="/lessons"
              className={pathname == "/lessons" ? activeLinkStyle : ""}
            >
              Pembelajaran
            </Link>
          </li>

          <li className="text-2xl py-2" onClick={onClose}>
            <Link
              href="/about"
              className={pathname == "/about" ? activeLinkStyle : ""}
            >
              About
            </Link>
          </li>

          {/* <li className="text-2xl py-2" onClick={onClose}>
            <Link
              href="/contact"
              className={pathname == "/contact" ? activeLinkStyle : ""}
            >
              Contact
            </Link>
          </li> */}

          <li className="text-2xl py-2" onClick={onClose}>
            <Link
              href="/login"
              className={pathname == "/login" ? activeLinkStyle : ""}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarFrontPage;
