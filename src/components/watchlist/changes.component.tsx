"use client";
import WatchStore from "@/store/watchlist";
import React from "react";
import StockTable from "./stocksTable/index.component";
import Stocks from "../home/watchlist/stocks/index.component";

export default function Changes() {
  const { shape } = WatchStore();

  return (
    <>
      {!shape && <StockTable />}
      {shape && <Stocks />}
    </>
  );
}
