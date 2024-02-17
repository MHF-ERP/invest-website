import Profile from "@/components/profile.component";
import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ProfileStock(props: { data: any }) {
  return (
    <div className=" flex justify-between items-center">
      <Profile data={props.data} />
      <BsThreeDotsVertical
        style={{ color: "#84A08E" }}
        className="  cursor-pointer text-lg"
      />
    </div>
  );
}
