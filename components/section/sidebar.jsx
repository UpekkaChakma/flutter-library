"use client";
import React, { useState } from "react";
import Image from "next/image";

import logo from "@/assets/side-nav-icons/logo.webp";
import { SIDE_MENU_ACTIVE_USERS, SIDE_MENU_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import IconButton from "@/components/icon-button";

const Sidebar = () => {
  const [selected, setSelected] = useState(SIDE_MENU_ITEMS[0].title);
  return (
    <aside className="hidden md:block">
      <div className="fixed left-0 top-0 h-screen flex flex-col py-4 gap-[10px] border-r border-primary">
        <IconButton
          src={logo}
          imgWidth={108}
          alt="flutter=library"
          className="p-4 gap-[10px]"
        />

        <SidebarTop selected={selected} list={SIDE_MENU_ITEMS} />
        <SidebarBottom list={SIDE_MENU_ACTIVE_USERS} />
      </div>
    </aside>
  );
};

export default Sidebar;

const SidebarTop = ({ selected, list }) => {
  return (
    <ul className="flex flex-col gap-1">
      {list.map((item, index) => (
        <li key={index}>
          <a
            className={cn("cursor-pointer flex items-center px-4 py-2 gap-2", {
              "bg-secondary": selected === item.title,
            })}
          >
            <Image src={item.Logo} alt={item?.title} width={20} height={20} />
            <span
              className={cn("text-sm lg:text-xs text-secondary leading-zero", {
                "text-primary font-semibold": selected === item.title,
              })}
            >
              {item?.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const SidebarBottom = ({ list }) => {
  return (
    <div className="flex flex-col text-sm lg:text-xs px-4 py-2 gap-3 cursor-default">
      <p className="text-sm lg:text-xs text-primary font-semibold">
        All Screens
      </p>
      <ul className="flex flex-col gap-3 ml-2">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex justify-between text-sm lg:text-xs text-secondary leading-primary"
          >
            <span>{item?.page}</span>
            <span>{item?.activeUsersCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
