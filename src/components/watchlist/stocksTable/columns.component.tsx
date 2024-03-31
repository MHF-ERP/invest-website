"use client";
import Garph from "@/components/graph.component";
import GraphWatchIt from "@/components/home/watchlist/stocks/graphWatchIt.component";
import Profile from "@/components/profile.component";
import TextColor from "@/functions/textColor";
import Remove from "@/icons/remove.icon";
import { GetSymbolId } from "@/services/home/getSymbolId";
import { GetSymbolId2 } from "@/services/home/getSymbolId2";
import { stocksStore } from "@/store/stocks";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Column(props: { item: string; last: boolean }) {
  const { last } = props;
  const { stocks } = stocksStore();
  const [data, setData] = useState<any>();
  useEffect(() => {
    setData(stocks.filter((it: any) => it["symbol"] === props.item)[0]);
  }, []);

  //
  return (
    <tr className={` w-full ${!last ? "border-b-2" : ""} `}>
      <td className={`px-[24px] py-[16px] `}>
        {data && <Profile data={data} />}
      </td>
      <td className={` px-[24px] ${!last ? "border-b-2" : ""}`}>
        <div className="  flex flex-col  w-fit  items-start text-start  ">
          <span className={`${TextColor("-")} font-[600]  text-[14px]`}>
            {data && data["changes"]}
          </span>
        </div>
      </td>
      <td className=" mt-[-50px]  w-full pr-[40px] flex items-center justify-center py-[16px]">
        {/* {data && (  
          <GraphWatchIt symbol={props.item} text={data && data["changes"]} />
        )} */}
      </td>
      <td className="text-[#171D19] px-[0px] py-[16px] w-[20px]  font-semibold text-start">
        42051.94
      </td>
      <td className="text-[#171D19] px-[24px] py-[16px] w-[20px]  font-semibold text-start">
        {data && data["price"]}
      </td>
      <td className="px-[24px] py-[16px] ">
        <Remove />
      </td>
    </tr>
  );
}
