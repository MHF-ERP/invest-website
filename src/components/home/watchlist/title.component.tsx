import React from "react";

export default function Title(props: { title: string }) {
  const { title } = props;
  return <h1 className=" font-bold text-main mb-2">{title}</h1>;
}
