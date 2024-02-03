import { chexkLength } from "@/functions/textLength";
import Image from "next/image";
import React from "react";

export default function Card(props: {
  item: {
    img: string;
    title: string;
    brief: string;
    value: string;
    change: string;
  };
}) {
  const { item } = props;
  return (
    <div className=" w-full flex justify-between items-center">
      <div className=" flex gap-2">
        <Image
          src={item["img"]}
          alt="company image"
          width={38}
          height={38}
          className="  rounded-lg"
        />
        <div className=" flex flex-col">
          <span className=" font-semibold text-[14px]">{item["title"]}</span>
          <span className=" w-full  text-sm text-p text-[14px] xl:flex lg:flex  hidden">
            {chexkLength(item["brief"], 24)}{" "}
          </span>
          <span className=" w-full  text-sm text-p xl:hidden text-[14px] lg:hidden  md:flex hidden ">
            {chexkLength(item["brief"], 10)}{" "}
          </span>

          <span className=" w-full  text-sm text-p xl:hidden lg:hidden  text-[14px] md:hidden flex ">
            {chexkLength(item["brief"], 20)}{" "}
          </span>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <span className=" text-main font-bold text-[16px]">
          ${item["value"]}
        </span>
        <span className=" text-success text-[14px] font-semibold">
          {item["change"]}
        </span>
      </div>
    </div>
  );
}
