import React from "react";

export default function Card(props: {
  rounded: number;
  current: boolean;
  text: string;
}) {
  const { rounded, current, text } = props;
  return (
    <div
      className={` py-[8px] px-[16px] text-[14px] hover:bg-main2 hover:text-white  trans cursor-pointer ${
        current ? "text-white bg-main2" : "text-taps bg-white"
      } border-divider border-l border-r transTaps ${
        rounded === 1 ? " rounded-l-lg" : rounded === 2 ? "rounded-r-lg" : ""
      } `}
    >
      {text}
    </div>
  );
}
