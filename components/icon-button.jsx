import React from "react";
import Image from "next/image";

const IconButton = ({ src, alt, imgWidth, className, handleClick }) => {
  return (
    <button onClick={handleClick || ""} className={className}>
      <Image src={src} alt={alt} width={imgWidth} />
    </button>
  );
};

export default IconButton;
