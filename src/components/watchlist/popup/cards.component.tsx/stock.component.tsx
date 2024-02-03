import Image from "next/image";
import React from "react";

export default function StockPop(props: { current?: boolean }) {
  const { current } = props;
  return (
    <div
      className={` ${
        current ? "border-[#2E644E]" : " border-[#EAECF0] "
      }   rounded-[12px] flex gap-[12px] items-center border-[2px]  p-[12px]`}
    >
      <div className=" w-full items-center gap-2  flex flex-row">
        <div className="flex items-center w-[16px] h-[16px]  p-[2px]  justify-center ">
          <input
            name="Remember"
            id="disabled-checked-checkbox"
            type="checkbox"
            value=""
            checked={current ? true : false}
            className={`   text-[#2E644E] accent-[#2E644E] rounded-[4px] bg-gray-100 border-gray-300  focus:main`}
          />
        </div>
        <div className=" flex gap-2">
          <Image
            src="/images/companies/orange.png"
            width={40}
            height={40}
            alt="Stock Image"
            className=" rounded-[6px]"
          />
          <div className=" flex-1 flex-col gap-1 flex ">
            <span className=" font-[600] text-[14px] text-[#344054]">
              NVIDIA Corp
            </span>
            <span className=" font-[400] text-[14px] text-[#475467]">
              NVDA (USA)
            </span>
          </div>
        </div>
      </div>
      <span className=" text-[#171D19] font-[600] text-[16px]">$139.99</span>
    </div>
  );
}
