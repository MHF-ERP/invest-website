import React from "react";

export default function Trade(props: { title: string; brief: string }) {
  const { title, brief } = props;
  return (
    <div className=" flex w-full flex-col gap-1 border text-[12px] border-divider rounded-[4px]">
      <span style={{ color: "#6B8373" }} className=" px-[8px] pt-1">
        {title}
      </span>
      <hr className=" border border-divider" />
      <p
        style={{ color: "#6B8373" }}
        className=" px-[8px] pb-1 text-[14px] font-semibold"
      >
        42054.99
      </p>
    </div>
  );
}
