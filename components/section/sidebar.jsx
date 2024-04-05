"use client";
import React, { useContext } from "react";

import logo from "@/assets/side-nav-icons/logo.webp";
import { cn } from "@/lib/utils";
import SidebarTop from "@/components/sidebar-top";
import SidebarBottom from "@/components/sidebar-bottom";
import IconButton from "@/components/icon-button";
import Button from "@/components/button";
import { Context } from "@/context/index.js";

const Sidebar = () => {
  return (
    <aside>
      <SidebarMobile />
      <SidebarDesktop />
    </aside>
  );
};

export default Sidebar;

const SidebarDesktop = () => {
  return (
    <div className="fixed left-0 top-0 h-screen border-r border-primary hidden md:block">
      <div className="flex flex-col py-4 gap-[10px]">
        <IconButton
          src={logo}
          imgWidth={108}
          alt="flutter=library"
          className="p-4 gap-[10px]"
        />
        <SidebarTop />
        <SidebarBottom />
      </div>
    </div>
  );
};

const SidebarMobile = () => {
  const { sidebarOpen, toggleSidebar } = useContext(Context);

  return (
    <div>
      <div
        onClick={toggleSidebar}
        className={cn("fixed inset-0 bg-transparent pointer-events-none z-10", {
          "bg-gray-100 bg-opacity-70 pointer-events-auto": sidebarOpen === true,
        })}
      ></div>
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-52 block md:hidden px-3 md:px-0 -translate-x-full transition-transform bg-white",
          {
            "translate-x-0 z-50": sidebarOpen === true,
          }
        )}
      >
        <div className="relative w-full h-full flex flex-col gap-[10px] z-20">
          <div className="flex justify-end px-x pt-3 pb-4">
            <Button
              buttonType="light"
              text="close"
              handleClick={toggleSidebar}
            />
          </div>
          <SidebarTop />
          <SidebarBottom />
        </div>
      </div>
    </div>
  );
};
