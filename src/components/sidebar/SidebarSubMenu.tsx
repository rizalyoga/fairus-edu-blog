"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdKeyboardArrowDown } from "react-icons/md";
import { RoutesInterfaces } from "@/types/types";

const SidebarSubMenu = ({ submenu, name, icon }: RoutesInterfaces) => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [studentScoreData, setStudentScoreData] = useState();

  useEffect(() => {
    if (
      submenu.filter((menu) => {
        return menu.path === pathname;
      })[0]
    )
      setIsExpanded(true);
  }, [pathname, submenu]);

  useEffect(() => {
    if (typeof window) {
      const dataScore = JSON.parse(
        sessionStorage.getItem("student-score") as string
      );
      setStudentScoreData(dataScore?.[0]);
    }
  }, [isExpanded, pathname]);

  return (
    <div className="flex flex-col">
      {/** Route header */}
      <div
        className="w-full text-lg flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="flex items-center gap-2 py-2">
          {icon} {name}
        </p>
        <MdKeyboardArrowDown
          className={
            "w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all text-xl " +
            (isExpanded ? "rotate-180" : "")
          }
        />
      </div>

      {/** Submenu list */}
      <div className={` w-full ` + (isExpanded ? "" : "hidden")}>
        <ul className={`menu menu-compact`}>
          {submenu.map((menu, idx) => {
            return (
              <li key={idx}>
                <Link
                  href={menu.path}
                  className={`text-lg ${
                    pathname === menu.path ? "font-bold bg-base-200" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={
                      studentScoreData?.[menu?.columnName] ? true : false
                    }
                    readOnly
                    defaultChecked={false}
                    className="checkbox checkbox-primary rounded-full border-2 w-4 h-4 -mt-[1.6px]"
                  />
                  <p className="flex items-center gap-1">{menu.name}</p>
                  {pathname === menu.path ? (
                    <span
                      className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary-violet"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarSubMenu;
