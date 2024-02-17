import { chexkLength } from "@/functions/textLength";
import { stocksStore } from "@/store/stocks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Card2(props: { item: any }) {
  const router = useRouter();
  const { item } = props;
  const { stocks, setStocks } = stocksStore();
  console.log("ssssss " + item.symbol);
  return (
    <div
      onClick={() => router.push("/stock/1")}
      className=" cursor-pointer hover:opacity-80 w-full flex justify-between items-center"
    >
      <div className=" flex gap-2">
        <Image
          src={item["image"] ? item["image"] : "/images/trad.jpg"}
          alt="company image"
          width={35}
          height={35}
          onError={() => {
            console.log("//////////////");

            const data = stocks.slice();

            console.log(item.symbol);
            console.log("//////////////");
            console.log(stocks);
            data.filter((stock: any) => stock === item)[0]["image"] =
              "/images/trad.jpg";
            console.log(data);
            setStocks(data);
          }} // remove if the image fails to
          className="  rounded-lg"
        />
        <div className=" flex flex-col">
          <span className=" font-semibold text-[12px]">
            {item["companyName"]}
          </span>
          {item["description"] && (
            <span className=" w-full  text-sm text-p text-[8px] xl:flex lg:flex  hidden">
              {chexkLength(item["description"], 24)}{" "}
            </span>
          )}
          {item["description"] && (
            <span className=" w-full  text-sm text-p xl:hidden text-[8px] lg:hidden  md:flex hidden ">
              {chexkLength(item["description"], 10)}{" "}
            </span>
          )}

          {item["description"] && (
            <span className=" w-full  text-sm text-p xl:hidden lg:hidden  text-[8px] md:hidden flex ">
              {chexkLength(item["description"], 20)}{" "}
            </span>
          )}
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <span className=" text-main font-bold text-[16px]">
          ${item["price"]}
        </span>
        <span
          className={` ${
            item["changes"] && item["changes"].toString()[0] !== "-"
              ? "text-success"
              : "text-[#B42318]"
          } text-[14px] font-semibold`}
        >
          {item["changes"]}%
        </span>
      </div>
    </div>
  );
}
