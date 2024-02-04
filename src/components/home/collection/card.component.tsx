import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Card() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/stock/1")}
      className=" cursor-pointer hover:opacity-80 flex flex-col gap-2 flex-1 items-center py-2 rounded-[6px] border border-divider  "
    >
      <Image
        alt="img"
        src={"/images/companies/orange.png"}
        width={40}
        height={40}
        className=" rounded-[6px]"
      />
      <div className=" flex gap-1 flex-col items-center">
        <span className=" font-semibold text-[#020E09]">Gold</span>
        <span className=" text-[#45564B]">1 Stock</span>
      </div>
    </div>
  );
}
