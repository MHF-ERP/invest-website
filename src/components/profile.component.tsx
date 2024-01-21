import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <div className=" flex gap-2">
      <Image
        src={"/images/companies/orange.png"}
        alt="company Image"
        width={45}
        height={45}
        className=" rounded-lg"
      />
      <div className=" flex flex-col">
        <span className="  font-bold" style={{ color: "#171D19" }}>
          NVIDIA Corp
        </span>
        <span style={{ color: "#45564B" }} className=" -mt-1">
          NVDA (USA)
        </span>
      </div>
    </div>
  );
}
