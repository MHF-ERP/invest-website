import React from "react";

export default function Inputs(props: {
  text: string;
  holder: string;
  name?: string;
  onChange?: any;
  value?: string;
}) {
  const { text, holder, name, onChange, value } = props;
  return (
    <div className=" flex flex-col gap-1 w-full">
      <span className="  text-textInput text-sm">{text}</span>
      <input
        defaultValue={value}
        onChange={onChange}
        type={text.includes("Password") ? "password" : "text"}
        name={name}
        placeholder={holder}
        className=" border w-full border-input px-4 py-2 text-sm rounded-md placeholder:text-placeholder placeholder:text-sm outline-none"
      />
    </div>
  );
}
