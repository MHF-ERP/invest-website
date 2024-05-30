import { stocksStore } from "@/store/stocks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Card(props: {
  item: any;
  id: string;
  pred: string;
  up: Boolean;
}) {
  const { item } = props;
  const router = useRouter();
  const { stocks, setStocks } = stocksStore();
  return (
    <div
      onClick={() => router.replace("/stock/" + item["symbol"])}
      className=" min-w-[150px] items-center cursor-pointer hover:opacity-80 flex flex-col gap-2 flex-1 text-center py-2 rounded-[6px]    "
    >
      <Image
        alt="img"
        src={item["image"] ? item["image"] : "/images/trad.jpg"}
        width={86}
        height={56}
        onError={() => {
          const data = stocks.slice();
          data.filter((stock: any) => stock.symbol === item.symbol)[0][
            "image"
          ] = "/images/trad.jpg";
          setStocks(data);
        }}
        className=" rounded-[6px] w-[56px] h-[56px]"
      />
      <div className=" flex gap-1 flex-col items-center">
        <span
          className={` text-[14px] font-[600] ${
            props.up ? "text-[#020E09]" : "text-[#ffffff]"
          } `}
        >
          {item["companyName"]}
        </span>
        <span
          className={` ${
            props.up ? "text-[#45564B]" : "text-[#ffffff]"
          } text-[14px] font-[500]`}
        >
          {item["price"].toFixed(2)}
        </span>
      </div>
      <div className=" p-[6px] w-fit bg-[#F1FAED] rounded-[100px] text-[#0E2805] text-[12px]">
        {props.pred}% accuracy
      </div>
    </div>
  );
}
