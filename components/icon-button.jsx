import React from "react";
import Image from "next/image";

const IconButton = ({ src, alt, imgWidth, className }) => {
  return (
    <button className={className}>
      <Image src={src} alt={alt} width={imgWidth} />
    </button>
  );
};

export default IconButton;
