import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <div className=" flex gap-2 items-center">
      <Image
        src={"/images/companies/orange.png"}
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
          NVIDIA Corp
        </span>
        <span style={{ color: "#45564B" }} className=" text-[12px]">
          NVDA (USA)
        </span>
      </div>
    </div>
  );
}
