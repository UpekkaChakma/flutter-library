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
    <div
      className={cn(
        "fixed inset-0 block md:hidden -translate-x-full transition-transform",
        {
          "translate-x-0": sidebarOpen === true,
        }
      )}
    >
      <div className="relative w-full h-full">
        <div
          onClick={toggleSidebar}
          className="absolute inset-0 bg-gray-100 bg-opacity-70 z-10"
        ></div>
        <div className="absolute top-0 left-0 h-screen w-52 px-3 md:px-0 flex flex-col gap-[10px] bg-white z-20">
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
