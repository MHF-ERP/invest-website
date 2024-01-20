import React from "react";

export default function IconButton(props: {
  text: string;
  color: string;
  bgColor: string;
  icon: any;
  left: boolean;
}) {
  const { text, color, bgColor, left, icon } = props;
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: color }}
        className=" py-2 px-3 rounded-lg  items-center gap-2 border border-divider xl:flex lg:flex md:flex hidden"
      >
        {left && icon}
        {text}
        {!left && icon}
      </button>
      <button
        style={{ backgroundColor: bgColor, color: color }}
        className=" py-2 px-3 rounded-lg  items-center gap-2 border border-divider xl:hidden lg:hidden md:hidden flex"
      >
        {left && icon}
        {!left && icon}
      </button>
    </>
  );
}
