import React from "react";

export default function Title(props: { title: string }) {
  const { title } = props;
  return <h1 className=" font-bold text-main text-[16px] mb-2">{title}</h1>;
}
