import React from "react";
import Profile from "./profile.component";
import TextColor from "@/functions/textColor";
import Garph from "@/components/graph.component";
import Trade from "./trade.component";
import ProfileStock from "./profile.component";
import { GetSymbolId } from "@/services/home/getSymbolId";
import { useQuery } from "@tanstack/react-query";
import GraphWatchIt from "./graphWatchIt.component";
import { GetSymbolId2 } from "@/services/home/getSymbolId2";

export default function Card(props: { item: string; text: string }) {
  const { item, text } = props;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["symbolId"],
    queryFn: () => GetSymbolId2(item),
    // enabled: false,
  });

  return (
    <div className=" flex flex-col gap-3 w-[23%] p-[14px] border border-divider rounded-[8px]">
      {!isLoading && <ProfileStock data={data} />}
      <div className=" w-full py-[12px] justify-between items-center flex">
        <span className=" text-[#45564B] text-[12px]  font-[500]  ">
          Change(1D)
        </span>
        {!isLoading && (
          <span className={`${TextColor(text[0])}`}>
            {data & data["changes"]}
          </span>
        )}{" "}
      </div>
      {!isLoading && <GraphWatchIt symbol={item} text={data.changes} />}
      <div className=" w-full flex gap-2">
        <Trade title="Buy" brief="42054.99" />
        <Trade title="Short" brief="42054.99" />
      </div>
    </div>
  );
}
