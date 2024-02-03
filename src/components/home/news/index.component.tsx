import React from "react";
import Card from "./card.component";

export default function News() {
  return (
    <div
      className=" border border-divider shadow p-[21px] rounded-xl flex-1 flex flex-col gap-5"
      style={{ minWidth: "25%" }}
    >
      <h1 className=" font-bold text-main">Relevant News</h1>
      <div className="  gap-1 flex-col xl:flex lg:flex ">
        <Card />
        <hr className=" border border-news my-2" />
        <Card />
        <hr className=" border border-news my-2" />
        <Card />
        <hr className=" border border-news my-2" />
        <Card />
        <hr className=" border border-news my-2" />
        <Card />
      </div>
    </div>
  );
}
