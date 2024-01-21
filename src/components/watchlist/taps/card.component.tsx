import React from "react";

export default function Card(props: {
  rounded: number;
  current: boolean;
  text: string;
}) {
  const { rounded, current, text } = props;
  return (
    <div
      className={` p-2 px-4 ${
        current ? "text-white bg-main2" : "text-taps bg-white"
      } border-divider border-l border-r ${
        rounded === 1 ? " rounded-l-lg" : rounded === 2 ? "rounded-r-lg" : ""
      } `}
    >
      {text}
    </div>
  );
}
