import React from "react";

interface VerticalLineProps {
  className?: string;
}

const VerticalLine: React.FC<VerticalLineProps> = ({ className = "" }) => (
  <div
    className={`w-[38px] h-0 border-2 border-[#C84E26] opacity-100 rotate-[-90deg] mx-auto lg:my-16 mt-[24px] mb-[40px] ${className}`}
  />
);

export default VerticalLine;