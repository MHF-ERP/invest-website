import React from "react";

export default function Button(props: {
  text: string;
  color: string;
  bgColor: string;
}) {
  const { text, color, bgColor } = props;
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      className=" py-[10px] px-[14px] rounded-lg text-[14px] w-[104px]"
    >
      {text}
    </button>
  );
}
