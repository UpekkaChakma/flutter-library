import React from "react";

const SectionHeadingWithButton = ({ title }) => {
  return (
    <div className="flex justify-between py-4">
      <h3 className="text-xl text-primary font-500">{title}</h3>
      <button className="text-xs text-secondary px-3 py-1">See all</button>
    </div>
  );
};

export default SectionHeadingWithButton;
