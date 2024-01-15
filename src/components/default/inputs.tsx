import React from "react";

export default function Inputs(props: { text: string; holder: string }) {
  const { text, holder } = props;
  return (
    <div className=" flex flex-col gap-1 w-full">
      <span className="  text-textInput text-sm">{text}</span>
      <input
        placeholder={holder}
        className=" border w-full border-input px-4 py-2 text-sm rounded-md placeholder:text-placeholder placeholder:text-sm outline-none"
      />
    </div>
  );
}
