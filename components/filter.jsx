import React from "react";
import Image from "next/image";

import IconButton from "@/components/icon-button";
import Button from "@/components/button";

import FilterIcon from "@/assets/screens/filter.svg";
import Arrow from "@/assets/screens/arrow-right.svg";

const Filter = ({ list }) => {
  return (
    <div className="w-full relative mb-5">
      <div className="absolute top-0 left-0 w-[103px] flex items-center justify-between">
        <button className="flex items-center gap-2 bg-secondary rounded-full px-[14px] py-[6px]">
          <Image src={FilterIcon} alt="filter" width={16} />
          <span className="text-xs">Filters</span>
        </button>
        <span className="w-[2px] h-5 bg-secondary rounded-md"></span>
      </div>
      <ul className="pl-[115px] pr-20 flex overflow-hidden gap-3">
        {list.map((text, index) => (
          <li key={index}>
            <Button
              text={text}
              buttonType={index === 0 ? "dark" : "light"}
              isRounded={true}
            />
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 flex justify-center items-center h-full pl-7 pr-1 bg-white">
        <IconButton src={Arrow} alt="right-arrow" imgWidth={16} />
      </div>
    </div>
  );
};

export default Filter;
