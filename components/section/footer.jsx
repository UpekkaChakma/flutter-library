import React from "react";

import IconButton from "@/components/icon-button";
import NavLink from "@/components/nav-link";
import { FOOTER } from "@/constants";

const Footer = () => {
  const { logo, about, socialIcons, navLink1, navLink2, copyright, privacy } =
    FOOTER;
  return (
    <footer className="mt-14 md:mt-9 md:ml-[155px] px-9 lg:px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <About logo={logo} about={about} icons={socialIcons} />
        <Navigation navLink1={navLink1} navLink2={navLink2} />
      </div>
      <div className="bg-secondary w-full h-[1px] mt-8"></div>
      <div className="flex flex-col lg:flex-row justify-between gap-3 my-4">
        <p className="text-xs text-secondary whitespace-nowrap">{copyright}</p>
        <p className="text-xs text-secondary whitespace-nowrap">{privacy}</p>
      </div>
    </footer>
  );
};

export default Footer;

const About = ({ logo, about, icons }) => {
  return (
    <div className="flex flex-col gap-3">
      <IconButton src={logo} alt="flutter-library" imgWidth={107} />
      <h6 className="text-xs text-secondary leading-[19px] max-w-lg">
        {about}
      </h6>
      <ul className="flex gap-4">
        {icons.map((item, index) => (
          <li key={index}>
            <IconButton
              src={item.icon}
              alt={item.title}
              imgWidth={14}
              className="rounded-full bg-blackBackground p-[6px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navigation = ({ navLink1, navLink2 }) => {
  return (
    <div className="flex gap-10 pr-1">
      <NavLink link={navLink1} />
      <NavLink link={navLink2} />
    </div>
  );
};
