"use client";
import WatchStore from "@/store/watchlist";
import React from "react";
import StockTable from "./stocksTable/index.component";
import Stocks from "../home/watchlist/stocks/index.component";

export default function Changes(props: {
  setOverlay: any;
  setSymbol: any;
  setWatchlistId: any;
}) {
  const { setOverlay, setSymbol, setWatchlistId } = props;
  const { shape } = WatchStore();

  return (
    <>
      {!shape && (
        <StockTable
          setOverlay={setOverlay}
          setSymbol={setSymbol}
          setWatchlistId={setWatchlistId}
        />
      )}
      {shape && (
        <Stocks
          data={[]}
          setOverlay={setOverlay}
          setSymbol={setSymbol}
          setWatchlistId={setWatchlistId}
        />
      )}
    </>
  );
}
