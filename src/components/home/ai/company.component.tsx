import Image from "next/image";
import React from "react";

export default function Company() {
  return (
    <div className=" w-1/2 flex flex-col items-center gap-1">
      <Image
        src={"/images/companies/orange.png"}
        className=" rounded-[6px]"
        alt=" company"
        width={56}
        height={56}
      />
      <div className=" flex flex-col items-center">
        <span className=" text-[#F1FAED] text-[14px] font-semibold">AMD</span>
        <span className=" text-[#F1FAED] text-[14px] font-semibold">
          -1.33%
        </span>
      </div>

      <div className=" p-[4px] w-fit bg-[#F1FAED] rounded-[100px] text-[#0E2805] text-[10px]">
        40% accuracy
      </div>
    </div>
  );
}
