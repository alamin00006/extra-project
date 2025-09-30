import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h3
      className={twMerge(
        "my-5 block text-[16px] font-bold text-gray-700 dark:text-gray-400",
        className,
      )}
    >
      {" "}
      {children}
    </h3>
  );
};

export default SectionTitle;
