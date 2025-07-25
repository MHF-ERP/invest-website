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
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Card(props: {
  item: any;
  text: string;

  setWatchlistId: any;
  setOverlay: any;
  setSymbol: any;
}) {
  const { item, text, setWatchlistId, setOverlay, setSymbol } = props;
  const { allStocks } = stocksStore();
  const data =
    allStocks && allStocks.filter((it: any) => it["symbol"] === item.symbol)[0];

  if (!data) {
    return <div></div>;
  }
  return (
    <div className=" flex flex-col gap-3  w-[300px]  p-[14px] border border-divider rounded-[8px]">
      {data && (
        <ProfileStock
          data={data}
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
          <span className={`${TextColor(data["changes"].toString())}`}>
            {data["changes"]}
          </span>
        )}
      </div>
      <div className=" w-full flex items-center justify-center ">
        <div
          style={{
            width: "150px",
            height: "150px",
          }}
        >
          <CircularProgressbarWithChildren
            strokeWidth={4}
            value={66}
          ></CircularProgressbarWithChildren>
        </div>
      </div>

      {/* {data && <GraphWatchIt symbol={data["symbol"]} text={data["changes"]} />} */}
      <div className=" w-full flex gap-2">
        <Trade
          title="Earning"
          brief={
            data.price * item.amount - item.price * item.amount !== null &&
            data.price * item.amount - item.price * item.amount > 0
              ? (data.price * item.amount - item.price * item.amount).toFixed(
                  2
                ) +
                " " +
                data["currency"]
              : "0"
          }
        />
        <Trade
          title="Losing"
          brief={
            data.price * item.amount - item.price * item.amount !== null &&
            data.price * item.amount - item.price * item.amount < 0
              ? (data.price * item.amount - item.price * item.amount).toFixed(
                  2
                ) +
                " " +
                data["currency"]
              : "0"
          }
        />
      </div>
    </div>
  );
}
