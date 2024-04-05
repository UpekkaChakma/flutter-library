import React, { useContext } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Context } from "@/context";
import Link from "next/link";

const SidebarTop = () => {
  const { selected, SIDE_MENU_ITEMS } = useContext(Context);

  return (
    <ul className="flex flex-col gap-1">
      {SIDE_MENU_ITEMS.map((item, index) => (
        <li key={index}>
          <Link
            href="/"
            className={cn("cursor-pointer flex items-center px-4 py-2 gap-2", {
              "bg-secondary rounded-xl md:rounded-none":
                selected === item.title,
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
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarTop;
