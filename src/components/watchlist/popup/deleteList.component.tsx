import PopLayout from "@/components/layouts/pop.layout";
import React, { useEffect } from "react";
import Header from "@/components/watchlist/popup/header.component";
import XIcon from "@/icons/x.icon";
import Add from "./cards.component.tsx/add.component";
import { useQuery } from "@tanstack/react-query";
import { GetWatchLists } from "@/services/watchlist/getWatchLists.service";
import { getCookie } from "cookies-next";
import ContentLoader, { Facebook } from "react-content-loader";
import DeleteStockLoader from "@/components/loader/deleteStock.loader";
import WatchStore from "@/store/watchlist";

export default function DeleteList(props: { setOverlay: any }) {
  const { setOverlay } = props;
  const { data } = WatchStore();

  return (
    <PopLayout>
      <div className=" flex justify-between items-start">
        <Header
          title="My Watchlists"
          brief="Organize and edit your watchlists."
        />
        <XIcon color="#98A2B3" setOverlay={setOverlay} />
      </div>
      <div className="w-full h-fit mt-20px flex flex-col gap-[12px]  mt-[20px] overflow-y-auto">
        {data.map((item: any, idx: number) => {
          return (
            <Add
              id={item.id}
              key={idx}
              without
              title={item.name}
              length={item.stocks ? item.stocks.length : 0}
            />
          );
        })}
      </div>
    </PopLayout>
  );
}
