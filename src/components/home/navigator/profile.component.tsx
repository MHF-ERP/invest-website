import { chexkLength } from "@/functions/textLength";
import Image from "next/image";
import React from "react";
import { IoIosLogOut } from "react-icons/io";

export default function Profile() {
  return (
    <div className=" flex justify-between w-full items-start">
      <div className=" flex gap-2 items-center">
        <Image
          alt="user Image"
          width={50}
          height={50}
          className=" w-10 h-10  rounded-full"
          src="/images/profile/me.jpeg"
        />
        <div className=" xl:flex lg:flex hidden  flex-col">
          <h1 className=" text-white font-semibold text-sm">Fahd Hakem</h1>
          <p className=" -mt-1 text-sm" style={{ color: "#C3E8CF" }}>
            {chexkLength("fhakem75@gmail.com", 19)}
          </p>
        </div>
      </div>
      <IoIosLogOut className=" xl:flex lg:flex hidden text-nav cursor-pointer" />
    </div>
  );
}
