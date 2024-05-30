import { chexkLength } from "@/functions/textLength";
import { stocksStore } from "@/store/stocks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Card(props: { item: any }) {
  const router = useRouter();
  const { item } = props;
  const { stocks, setStocks } = stocksStore();
  return (
    <div
      onClick={() => router.replace("/stock/" + item["symbol"])}
      className="xl:flex-row lg:flex-row md:flex-row flex-col cursor-pointer hover:opacity-80 w-full flex xl:items-center lg:items-center md:items-center justify-between items-start"
    >
      <div className=" flex gap-2 ">
        <Image
          src={item["image"] ? item["image"] : "/images/trad.jpg"}
          alt="company image"
          width={32}
          height={32}
          onError={() => {
            const data = stocks.slice();
            data.filter((stock: any) => stock.symbol === item.symbol)[0][
              "image"
            ] = "/images/trad.jpg";
            setStocks(data);
          }} // remove if the image fails to
          className=" xl:w-[32px] lg:w-[32px] md:w-[32px]  xl:h-[32px] lg:h-[32px] md:h-[32px] w-[28px] h-[28px] rounded-lg"
        />
        <div className=" flex flex-col">
          <span className="  text-[12px] font-[600]">
            {item["companyName"]}
          </span>
          {item["sector"] && (
            <span className=" w-full  font-[400] text-p text-[12px]">
              {chexkLength(item["sector"], 24)}{" "}
            </span>
          )}
        </div>
      </div>
      <div className=" xl:flex lg:flex md:flex hidden xl:flex-col lg:flex-col md:flex-col flex-row items-center ">
        <span className=" text-main font-[600] text-[16px] flex gap-1 items-end">
          {item["price"].toFixed(2)}
          <span className=" text-[8px]"> {item["currency"]}</span>
        </span>
        <span
          className={` ${
            item["changes"] && item["changes"].toString()[0] !== "-"
              ? "text-success"
              : "text-[#B42318]"
          } text-[14px] font-[500]`}
        >
          {item["changes"]}
        </span>
      </div>
      <div className=" xl:hidden lg:hidden md:hidden flex flex-col mt-[10px]  items-center w-full ">
        <div className=" w-full flex justify-between items-center ">
          <span className=" text-main font-[600] text-[12px]">price :</span>

          <span className=" text-main font-[600] text-[12px] flex items-end gap-1">
            {item["price"].toFixed(2)}
            <span className=" text-[8px]"> {item["currency"]}</span>
          </span>
        </div>
        <div className=" w-full flex justify-between items-center ">
          <span className=" text-main font-[600] text-[12px]">changes :</span>

          <span
            className={` ${
              item["changes"] && item["changes"].toString()[0] !== "-"
                ? "text-success"
                : "text-[#B42318]"
            } text-[14px] font-[500]`}
          >
            {item["changes"]}
          </span>
        </div>
      </div>
    </div>
  );
}
