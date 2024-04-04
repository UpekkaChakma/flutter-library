import React from "react";
import Image from "next/image";

import SearchSvg from "@/assets/nav-icons/search.svg";
import LightSvg from "@/assets/nav-icons/light.svg";
import Logo from "@/assets/side-nav-icons/logo.webp";

import Button from "@/components/button";
import IconButton from "@/components/icon-button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 md:left-[174px] lg:left-[158px] bg-white">
      <div className="flex justify-between xs:px-4 px-6 py-3 md:p-4">
        <IconButton
          src={Logo}
          alt="flutter-library"
          imgWidth={108}
          className="md:hidden"
        />

        <div className="w-[300px] lg:w-[360px] h-11 hidden md:flex gap-2 py-2 px-[20px] bg-secondary rounded-full relative ">
          <input
            type="text"
            placeholder="Search..."
            className="absolute inset-0 pl-11 text-sm !outline-none bg-transparent rounded-full ring-1 ring-transparent focus:ring-secondary"
          />
          <Image src={SearchSvg} alt="search-icon" width={14} height={14} />
        </div>
        <div className="flex items-center xs:gap-2 gap-4">
          <IconButton
            src={SearchSvg}
            alt="magnifier-icon"
            width={20}
            className="xs:hidden md:hidden"
          />
          <IconButton src={LightSvg} alt="light-icon" width={24} />
          <Button text="Log in" buttonType="light" />
          <Button text="Get Pro" buttonType="dark" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
