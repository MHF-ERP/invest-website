import React from "react";

export default function Header(props: { title: string; brief: string }) {
  const { title, brief } = props;
  return (
    <div className=" w-full flex flex-col  items-center mb-4">
      <h1 className=" font-bold text-xl text-main">{title}</h1>
      <p className="  text-p text-sm   text-wrap flex-wrap w-fit max-w-96 text-center">
        {brief}
      </p>
    </div>
  );
}
