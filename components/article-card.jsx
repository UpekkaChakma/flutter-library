import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ title, img }) => {
  return (
    <Link href="/">
      <article className="w-full flex flex-col gap-[5px]">
        <div className="rounded-md overflow-hidden border border-primary">
          <Image src={img} className="object-cover" />
        </div>
        <p className="flex items-center gap-2 text-secondary text-xs mt-3">
          <span>Mar 24 2024</span>
          <span className="bg-secondary w-1 h-1 rounded-full"></span>
          <span>Animation</span>
        </p>
        <h4 className="text-primary text-sm font-bold line-clamp-1">{title}</h4>
      </article>
    </Link>
  );
};

export default ArticleCard;
