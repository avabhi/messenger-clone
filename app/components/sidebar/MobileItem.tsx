"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface IMobileItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}
const MobileItem: React.FC<IMobileItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
    group flex gap-x-3 
    text-sm leading-6 font-semibold w-full justify-center  p-4 text-gray-500 hover:text-black hover:bg-grey-100
    `,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className name="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
