import Image from "next/image";
import React from "react";

export default function Profile(props: { data: any }) {
  return (
    <div className=" flex gap-2 items-center">
      <Image
        src={props.data.image}
        alt="company Image"
        width={40}
        height={40}
        className=" rounded-lg"
      />
      <div className=" flex flex-col">
        <span
          className="   text-[14px] font-[500]"
          style={{ color: "#171D19" }}
        >
          {props.data["companyName"]}
        </span>
        <span style={{ color: "#45564B" }} className=" text-[12px]">
          {props.data["exchange"]} ({props.data["exchangeShortName"]})
        </span>
      </div>
    </div>
  );
}
