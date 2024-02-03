import React from "react";

export default function Score() {
  return (
    <div className=" w-full border border-divider shadow p-[21px] rounded-2xl flex justify-between items-center">
      <span className="  font-bold text-[16px]">Rumble Score</span>
      <span className=" text-placeholer text-[20px]">
        <span className=" font-semibold" style={{ color: "#171D19" }}>
          3.12
        </span>
        <span style={{ color: "#6B8373" }} className=" ">
          /5
        </span>
      </span>
    </div>
  );
}
