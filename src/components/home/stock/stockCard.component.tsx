import Button from "@/components/default/button.component";
import IconButton from "@/components/default/iconButton.component";
import Image from "next/image";
import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

import { FaArrowTrendDown } from "react-icons/fa6";

export default function StockCard() {
  return (
    <div className=" flex w-full justify-between items-start mt-6 text-sm">
      <div className=" flex gap-2">
        <Image
          alt="stockImage"
          src={"/images/companies/orange.png"}
          width={66}
          height={66}
          className=" rounded-[6px]"
        />
        <div className=" flex-col flex justify-center">
          <span
            className="  font-semibold text-[16px] text-[#171D19]"
            style={{ color: "#0B0E0C" }}
          >
            NVIDIA Corp{" "}
            <span className=" font-light" style={{ color: "#45564B" }}>
              {" "}
              | NVDA (USA)
            </span>{" "}
          </span>
          <span
            className=" xl:flex-row lg:flex-row md:flex-row flex-col  font-bold flex  text-[32px] gap-1 "
            style={{ color: "#0B0E0C" }}
          >
            $546.81
            <span className=" text-decrease font-semibold  text-[12px] flex flex-row items-end text-xs gap-2">
              <FaArrowTrendDown />
              -1.12 (-0.2%)
              <span className=" text-xs font-normal flex items-end text-p">
                04:00 PM EST
              </span>{" "}
            </span>{" "}
          </span>
        </div>
      </div>
      <div className=" flex gap-2  xl:flex-row lg:flex-row md:flex-row flex-col">
        <IconButton
          text="Add to Watchlist"
          color="#2E644E"
          bgColor="#FFFFFF"
          left={true}
          icon={<MdFormatListBulletedAdd className=" text-[#323232]" />}
        />
        <Button text="Trade" color="#FFFFFF" bgColor="#2E644E" />
      </div>
    </div>
  );
}
