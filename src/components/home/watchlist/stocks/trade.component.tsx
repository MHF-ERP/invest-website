import React from "react";

export default function Trade(props: { title: string; brief: string }) {
  const { title, brief } = props;
  return (
    <div className=" flex w-full flex-col gap-1 border border-divider rounded-xl">
      <span style={{ color: "#6B8373" }} className=" px-4 pt-1">
        {title}
      </span>
      <hr className=" border border-divider" />
      <p
        style={{ color: "#171D19" }}
        className=" px-4 pb-1 text-xl font-semibold"
      >
        42054.99
      </p>
    </div>
  );
}
