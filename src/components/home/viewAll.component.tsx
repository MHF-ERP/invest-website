import React from "react";
import Title from "./watchlist/title.component";

export default function ViewAll(props: { title: string; brief: string }) {
  const { title, brief } = props;
  return (
    <div className=" flex justify-between items-center">
      <div className=" flex flex-col">
        <Title title={title} />
        <p className=" text-[#45564B] text-[14px] -mt-1">{brief}</p>
      </div>
      <div
        className=" flex items-center justify-center rounded-2xl px-4 py-2 cursor-pointer"
        style={{ border: "1px solid #D0D5DD", color: "#344054" }}
      >
        View all
      </div>{" "}
    </div>
  );
}
