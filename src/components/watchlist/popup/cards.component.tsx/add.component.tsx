import Delete from "@/icons/delete.icon";
import React from "react";

export default function Add(props: { current?: boolean; without?: boolean }) {
  const { current, without } = props;
  return (
    <div
      className={` ${
        current ? "border-[#2E644E]" : " border-[#EAECF0] "
      }   rounded-[12px] flex gap-[12px] items-center border-[2px]  p-[12px] ${
        without ? "justify-between" : ""
      }`}
    >
      {!without ? (
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
      ) : (
        ""
      )}

      <div className=" flex-1 flex-col gap-1 flex ">
        <span className=" font-[600] text-[14px] text-[#344054]">
          Currencies
        </span>
        <span className=" font-[400] text-[14px] text-[#475467]">
          10 Stocks
        </span>
      </div>

      <div className=" cursor-pointer flex items-center justify-center p-[8px] border border-[#EAECF0] rounded-[8px]">
        <Delete color="#344054" />
      </div>
    </div>
  );
}
