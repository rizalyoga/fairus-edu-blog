"use clientz2";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";

const SidebarSubMenu = ({ submenu, name, icon }: any) => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (
      submenu.filter((m: any) => {
        return m.path === pathname;
      })[0]
    )
      setIsExpanded(true);
  }, [pathname]);

  return (
    <div className="flex-col">
      {/** Route header */}
      <div className="w-full" onClick={() => setIsExpanded(!isExpanded)}>
        {icon} {name}
        <MdKeyboardArrowDown
          className={
            "w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  " +
            (isExpanded ? "rotate-180" : "")
          }
        />
      </div>

      {/** Submenu list */}
      <div className={` w-full ` + (isExpanded ? "" : "hidden")}>
        <ul className={`menu menu-compact`}>
          {submenu.map((m: any, k: any) => {
            return (
              <li key={k}>
                <Link href={m.path}>
                  {m.icon} {m.name}
                  {pathname == m.path ? (
                    <span
                      className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
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
