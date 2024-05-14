"use client";
import dynamic from "next/dynamic";

import { GetWatchLists } from "@/services/watchlist/getWatchLists.service";
import WatchStore from "@/store/watchlist";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GetSymbol } from "@/services/home/indices.service";
import { stocksStore } from "@/store/stocks";
import DeleteLayout from "@/components/watchlist/popup/deletelayout.component";
import Stocks from "@/components/home/watchlist/stocks/index.component";
import { GetStocks } from "@/services/watchlist/getStocks.service";
import Profile from "@/components/profile.component";
const IconButton = dynamic(
  () => import("@/components/default/iconButton.component")
);
const Navigator = dynamic(
  () => import("@/components/home/navigator/navigator.component")
);
const HomeLayout = dynamic(() => import("@/components/layouts/home.layout"));
const Changes = dynamic(
  () => import("@/components/watchlist/changes.component")
);
const Header = dynamic(() => import("@/components/watchlist/header.component"));
const CreateList = dynamic(
  () => import("@/components/watchlist/popup/createList.component")
);
const DeleteList = dynamic(
  () => import("@/components/watchlist/popup/deleteList.component")
);
const Actions = dynamic(
  () => import("@/components/watchlist/taps/actions.component")
);
const Taps = dynamic(
  () => import("@/components/watchlist/taps/taps.component")
);

import "react-toastify/dist/ReactToastify.css";

import { FiEdit2 } from "react-icons/fi";
import PopLayout from "@/components/layouts/pop.layout";
import Slider from "@/components/layouts/slider.layout";
import AddList from "@/components/watchlist/popup/AddList.component";
import { ToastContainer } from "react-toastify";
import { GetAllStocks } from "@/services/wallet/getAllStocks";

export default function Page() {
  const { allStocks, setAllStocks, market } = stocksStore();
  const { overlay, updateOverlay } = WatchStore();
  const [symbol, setSymbol] = useState("");
  const [watchlistId, setWatchlistId] = useState<any>(null);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["my Stocks"],
    queryFn: () => GetStocks(getCookie("AccessToken")!),
    enabled: true,
  });

  const {} = useQuery({
    queryKey: ["allStocks"],
    queryFn: () => GetAllStocks(setAllStocks),

    enabled: allStocks === null,
  });
  const ReformatDate = (dateString: any) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const item =
    watchlistId !== null && overlay !== 0
      ? data.myStocks.filter(
          (it: any) => it.symbol === watchlistId.symbol && it["amount"] !== 0
        )[0]
      : null;

  const details = [
    {
      title1: "Symbol",
      title2: watchlistId !== null && overlay !== 0 ? watchlistId.symbol : "",
    },
    {
      title1: "Changes",
      title2: watchlistId !== null && overlay !== 0 ? watchlistId.changes : "",
    },
    {
      title1: "Current Price",
      title2:
        watchlistId !== null && overlay !== 0
          ? watchlistId.price + " " + watchlistId.currency
          : "",
    },

    {
      title1: "Total shares",
      title2: watchlistId !== null && overlay !== 0 ? item.amount : "",
    },
    {
      title1: "Prediction",
      title2:
        watchlistId !== null && overlay !== 0
          ? item["prediction"]["prediction"]
          : "",
    },
    {
      title1: "Probability",
      title2:
        watchlistId !== null && overlay !== 0
          ? (item["prediction"]["probability"] * 100).toFixed() + "%"
          : "",
    },
    {
      title1: "Earning",
      title2:
        watchlistId !== null && overlay !== 0
          ? item.price > 0
            ? item.price.toFixed(2) + " " + watchlistId["currency"]
            : "0"
          : "",
    },
    {
      title1: "Losing",
      title2:
        watchlistId !== null && overlay !== 0
          ? item.price < 0
            ? item.price.toFixed(2) + " " + watchlistId["currency"]
            : "0"
          : "",
    },
    {
      title1: "Last Updated",
      title2:
        watchlistId !== null && overlay !== 0
          ? ReformatDate(item["history"][0]["createdAt"])
          : "",
    },
  ];

  return (
    <main className={`  flex  h-screen max-w-screen  bg-[#1F332B]`}>
      <ToastContainer />
      {overlay !== 0 && (
        <div
          onClick={() => updateOverlay(0)}
          className=" bg-[#0C111D] w-screen
           h-screen   opacity-60 absolute top-0 left-0 z-10"
        ></div>
      )}

      {overlay === 2 && (
        <AddList duplicate={true} symbol={watchlistId.symbol} />
      )}
      {overlay !== 0 && (
        <Slider overlay={overlay} setOverlay={updateOverlay}>
          <div className=" flex items-center justify-between">
            <h1 className=" text-[#0B0E0C] text-[30px] font-[700]">
              Stock Details
            </h1>
            <FiEdit2
              className=" cursor-pointer"
              onClick={() => updateOverlay(2)}
            />
          </div>

          <hr className=" mb-[20px]" />
          <div className=" flex flex-col justify-between h-full">
            <Profile data={watchlistId} />
            {details.map((detail: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className=" flex w-full justify-between items-center"
                >
                  <span style={{ color: "#6B8373" }}>{detail["title1"]}</span>
                  <span style={{ color: "#0B1813" }}>{detail["title2"]}</span>
                </div>
              );
            })}
          </div>
          {/* <button 
          onClick={()=>}
          className=" w-full bg-red-500 text-white cursor-pointer hover:shadow-lg py-[10px] rounded-lg mt-[10px]">
            Delete This Stock
          </button> */}
        </Slider>
      )}
      <div className={`${overlay ? "over" : ""} flex w-full`}>
        <Navigator current={2} />

        <HomeLayout overlay={overlay}>
          <Header empty={false} setOverlay={updateOverlay} WithoutIcon={true} />
          <hr className="my-4" />

          {data && allStocks && (
            <Stocks
              data={data["myStocks"].filter((it: any) => it.amount !== 0)}
              setOverlay={updateOverlay}
              setSymbol={setSymbol}
              setWatchlistId={setWatchlistId}
            />
          )}
        </HomeLayout>
      </div>
    </main>
  );
}
