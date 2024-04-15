import React from "react";

export default function Trade(props: { title: string; brief: string }) {
  const { title, brief } = props;
  console.log(brief);
  return (
    <div className=" flex w-full flex-col gap-1 border text-[12px] border-divider rounded-[4px]">
      <span
        style={{ color: title === "Earning" ? "#17B26A" : "#F04438" }}
        className=" font-[600] px-[8px] pt-1"
      >
        {title}
      </span>
      <hr className=" border border-divider" />
      <p
        style={{ color: title === "Earning" ? "#17B26A" : "#F04438" }}
        className={` ${
          brief === "-" && "text-center"
        } px-[8px] pb-1 text-[14px] font-semibold`}
      >
        {brief}
      </p>
    </div>
  );
}
