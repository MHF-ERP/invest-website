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
      className=" py-2 px-3 rounded-lg"
    >
      {text}
    </button>
  );
}
