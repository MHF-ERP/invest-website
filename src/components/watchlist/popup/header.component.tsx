import React from "react";

export default function Header(props: { title: string; brief: string }) {
  const { title, brief } = props;
  return (
    <div className=" flex flex-col gap-[12px]">
      <h1 className=" text-[16px] font-[600] text-[#101828]">{title}</h1>
      <p className=" text-[14px] font-[400] text-[#475467]">{brief}</p>
    </div>
  );
}
