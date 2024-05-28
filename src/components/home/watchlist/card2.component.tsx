import { chexkLength } from "@/functions/textLength";
import { stocksStore } from "@/store/stocks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Card2(props: { item: any }) {
  const router = useRouter();
  const { item } = props;
  const { stocks, setStocks } = stocksStore();
  return (
    <div
      onClick={() => router.push("/stock/" + item["symbol"])}
      className="xl:flex-row lg:flex-row md:flex-row flex-col cursor-pointer hover:opacity-80 w-full flex justify-between items-center min-h-[40px] "
    >
      <div className=" flex gap-2 ">
        <Image
          src={item["image"] ? item["image"] : "/images/trad.jpg"}
          alt="company image"
          width={32}
          height={32}
          onError={() => {
            const data = stocks.slice();

            data.filter((stock: any) => stock === item)[0]["image"] =
              "/images/trad.jpg";
            setStocks(data);
          }} // remove if the image fails to
          className=" w-[32px] h-[32px]  rounded-lg"
        />
        <div className=" flex flex-col">
          <span className=" font-[600] text-[12px]">{item["companyName"]}</span>
          {item["description"] && (
            <span className=" w-full font-[400]  text-[12px] text-p ">
              {chexkLength(item["sector"], 18)}{" "}
            </span>
          )}
        </div>
      </div>
      <div className=" xl:flex lg:flex md:flex hidden xl:flex-col lg:flex-col md:flex-col flex-row items-center ">
        <span className=" text-main font-[600] text-[14px] flex gap-1 items-end">
          { item["price"] && item["price"].toFixed(2)}
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

          <span className=" text-main font-[600] text-[10px] flex gap-1 items-end">
            {item["price"] &&  item["price"].toFixed(2)}
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
