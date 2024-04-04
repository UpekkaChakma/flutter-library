import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ text, buttonType, isRounded }) => {
  return (
    <button
      className={cn("py-3 px-4 text-xs md:text-sm font-bold rounded-2xl", {
        "text-white bg-primary": buttonType === "dark",
        "text-primary border border-primary": buttonType === "light",
        "rounded-full font-normal px-[14px] py-[6px] !text-xs whitespace-nowrap":
          isRounded === true,
      })}
    >
      {text}
    </button>
  );
};

export default Button;