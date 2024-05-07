import { formatDate2 } from "@/functions/formatDate";
import React from "react";

export default function TextDay(props: { item: any }) {
  const { item } = props;

  return (
    <div className="flex  ml-[20px] w-full h-full flex-col cursor-pointer">
      {item.history.map((it: any, idx: number) => {
        return it["amount"].toString()[0] === "-" ? (
          <div
            key={idx}
            className=" w-fit h-full bg-center relative  items-center flex justify-center"
          >
            <div className=" flex flex-col items-center">
              <div className=" flex">
                <div className=" relative w-[25px] h-[25px] rounded-full border border-red-600 flex"></div>
                <span className=" w-[400px] absolute left-[38px] text-slate-400">
                  {formatDate2(it["createdAt"])}
                </span>
              </div>
              <hr className=" h-[80px] bg-red-600 border-red-600 w-[1px]" />
            </div>
            <div className=" flex flex-col gap-[5px] mt-[5px]">
              <span className=" text-headerWatch font-[500]">
                {" "}
                Amount:{" "}
                <span className=" text-red-600">
                  {it["amount"]} Stocks
                </span>{" "}
              </span>
              <span className=" text-headerWatch font-[500]">
                {" "}
                Price: <span className=" text-red-600">
                  {it["price"]} $
                </span>{" "}
              </span>
            </div>
          </div>
        ) : (
          <div
            key={idx}
            className=" w-fit h-full bg-center relative  items-center flex justify-center"
          >
            <div className=" flex flex-col items-center">
              <div className=" flex">
                <div className=" relative w-[25px] h-[25px] rounded-full border border-green-600 flex"></div>
                <span className=" w-[400px] absolute left-[38px] text-slate-400">
                  {formatDate2(it["createdAt"])}
                </span>
              </div>
              <hr className=" h-[80px] bg-green-600 border-green-600 w-[1px]" />
            </div>
            <div className=" flex flex-col gap-[5px] mt-[5px]">
              <span className=" text-headerWatch font-[500]">
                {" "}
                Amount:{" "}
                <span className=" text-success">
                  {it["amount"]} Stocks
                </span>{" "}
              </span>
              <span className=" text-headerWatch font-[500]">
                {" "}
                Price: <span className=" text-success">
                  {it["price"]} $
                </span>{" "}
              </span>
            </div>
          </div>
        );
      })}

      <div className=" flex flex-col gap-[5px] mt-[5px]">
        <span className=" text-headerWatch font-[500]">
          {" "}
          Total Amount:{" "}
          <span className=" text-success">{item["amount"]} Stocks</span>{" "}
        </span>
        <span className=" text-headerWatch font-[500]">
          {" "}
          Total Price: <span className=" text-success">
            {item["price"]} $
          </span>{" "}
        </span>
      </div>
    </div>
  );
}
