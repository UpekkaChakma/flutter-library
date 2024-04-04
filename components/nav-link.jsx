import React from "react";
import Link from "next/link";

const NavLink = ({ link }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h6 className="text-xs text-black font-bold cursor-default">
        {link.title}
      </h6>
      <ul className="flex flex-col gap-[10px]">
        {link.links.map((link, index) => (
          <li key={index} className="text-primary text-xs font-500">
            <Link href="/">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLink;
