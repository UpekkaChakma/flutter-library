import Image from "next/image";
import Link from "next/link";

import Mobile from "@/assets/templates/mobile.svg";
import Download from "@/assets/templates/download.svg";

const TemplateCard = ({ title, img }) => {
  return (
    <Link href="/">
      <article className="w-full flex flex-col">
        <div className="rounded-md overflow-hidden border border-primary">
          <Image src={img} className="object-cover" />
        </div>
        <header className="flex justify-between pt-2">
          <h3 className="text-primary text-sm font-bold line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-[10px]">
            <p className="flex items-center gap-[6px]">
              <Image src={Mobile} width={9} height={9} alt="mobile-icon" />
              <span className="text-xs text-primary font-500">28</span>
            </p>
            <p className="flex items-center gap-[6px]">
              <Image
                src={Download}
                width={14}
                height={14}
                alt="download-icon"
              />
              <span className="text-xs text-primary font-500">546</span>
            </p>
          </div>
        </header>
      </article>
    </Link>
  );
};

export default TemplateCard;
