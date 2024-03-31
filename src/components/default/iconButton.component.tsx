import React from "react";
export default function IconButton(props: {
  text: string;
  color: string;
  bgColor: string;
  icon: any;
  left: boolean;
  hide?: boolean | undefined;
  click?: any;
}) {
  const { text, color, bgColor, left, icon, hide, click } = props;
  return (
    <>
      <button
        onClick={() => click()}
        disabled={hide === true && hide !== undefined}
        style={{ backgroundColor: bgColor, color: color }}
        className={`${
          hide === true ? " opacity-30" : ""
        }  font-semibold text-[14px] text-[#26312A] py-[10px] px-[14px] rounded-lg  items-center gap-1 border border-divider xl:flex lg:flex md:flex hidden`}
      >
        {left && icon}
        {text}
        {!left && icon}
      </button>
      {/*  */}
      <button
        onClick={() => click()}
        style={{ backgroundColor: bgColor, color: color }}
        className=" py-[10px] px-[14px] rounded-lg  items-center gap-2 border border-divider xl:hidden lg:hidden md:hidden flex"
      >
        {left && icon}
        {!left && icon}
      </button>
    </>
  );
}
