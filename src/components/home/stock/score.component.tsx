import React from "react";

export default function Score() {
  return (
    <div className=" w-full border border-divider shadow p-4 rounded-2xl flex justify-between items-center">
      <span className="  font-bold">Rumble Score</span>
      <span className=" text-placeholer">
        <span className="  font-bold" style={{ color: "#171D19" }}>
          3.12
        </span>
        <span style={{ color: "#6B8373" }} className=" ">
          /5
        </span>
      </span>
    </div>
  );
}
