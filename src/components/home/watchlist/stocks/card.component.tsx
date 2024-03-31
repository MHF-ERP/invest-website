"use client";
import React, { useEffect } from "react";
import Profile from "./profile.component";
import TextColor from "@/functions/textColor";
import Garph from "@/components/graph.component";
import Trade from "./trade.component";
import ProfileStock from "./profile.component";
import { GetSymbolId } from "@/services/home/getSymbolId";
import { useQuery } from "@tanstack/react-query";
import GraphWatchIt from "./graphWatchIt.component";
import { GetSymbolId2 } from "@/services/home/getSymbolId2";
import { stocksStore } from "@/store/stocks";

export default function Card(props: {
  item: string;
  text: string;

  id: string;
  setWatchlistId: any;
  setOverlay: any;
  setSymbol: any;
}) {
  const { item, text, id, setWatchlistId, setOverlay, setSymbol } = props;
  const { stocks } = stocksStore();
  const data = stocks && stocks.filter((it: any) => it["symbol"] === item)[0];
  return (
    <div className=" flex flex-col gap-3 w-[23%] p-[14px] border border-divider rounded-[8px]">
      {data && (
        <ProfileStock
          data={data}
          id={id}
          setWatchlistId={setWatchlistId}
          setOverlay={setOverlay}
          setSymbol={setSymbol}
          symbol={data["symbol"]}
        />
      )}
      <div className=" w-full py-[12px] justify-between items-center flex">
        <span className=" text-[#45564B] text-[12px]  font-[500]  ">
          Change(1D)
        </span>
        {data && (
          <span className={`${TextColor("2.4")}`}>{data["changes"]}</span>
        )}
      </div>
      {data && <GraphWatchIt symbol={data["symbol"]} text={data["changes"]} />}
      <div className=" w-full flex gap-2">
        <Trade title="Buy" brief={data && data["price"]} />
        <Trade title="Short" brief="42054.99" />
      </div>
    </div>
  );
}
