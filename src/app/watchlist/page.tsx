"use client";
import IconButton from "@/components/default/iconButton.component";
import Navigator from "@/components/home/navigator/navigator.component";
import HomeLayout from "@/components/layouts/home.layout";
import Changes from "@/components/watchlist/changes.component";
import Header from "@/components/watchlist/header.component";
import CreateList from "@/components/watchlist/popup/createList.component";
import DeleteList from "@/components/watchlist/popup/deleteList.component";
import Actions from "@/components/watchlist/taps/actions.component";
import Taps from "@/components/watchlist/taps/taps.component";
import { GetWatchLists } from "@/services/watchlist/getWatchLists.service";
import WatchStore from "@/store/watchlist";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function Page() {
  const { updateData, data } = WatchStore();
  const [overlay, setOverlay] = useState(0);
  const { isLoading } = useQuery({
    queryKey: ["Watchlists"],
    queryFn: () => GetWatchLists(getCookie("AccessToken")!, updateData),
    enabled: true,
  });

  if (isLoading)
    return (
      <div className=" w-screen h-screen flex items-center justify-center text-main2">
        Loading...
      </div>
    );
  const popup = [
    <CreateList setOverlay={setOverlay} key={0} />,
    <DeleteList key={1} setOverlay={setOverlay} />,
  ];
  return (
    <>
      {overlay !== 0 && popup[overlay - 1]}
      <main
        className={`  flex  h-screen max-w-screen  bg-[#1F332B] ${
          overlay ? "over" : ""
        }`}
      >
        {overlay !== 0 && (
          <div
            className=" bg-[#0C111D] w-screen
           h-screen  opacity-60 absolute top-0 left-0 z-10"
          ></div>
        )}

        <Navigator current={2} />

        {data && data !== undefined && data.length === 0 ? (
          <HomeLayout>
            <Header empty={true} setOverlay={setOverlay} />
            <hr className="my-4" />
            <div
              className=" flex items-center justify-center"
              style={{ width: "100%", height: "75vh" }}
            >
              <div className=" flex items-center flex-col gap-[4px]">
                <Image
                  src={"/images/empty.png"}
                  alt="empty"
                  width={150}
                  height={150}
                />
                <h1 className=" text-[20px] font-[600] text-[#0B0E0C]">
                  No watchlists yet
                </h1>
                <p className=" text-[14px] text-[#45564B] font-[400]">
                  Begin choosing the stocks you want to keep an eye on.
                </p>
                <div className=" flex gap-3 mt-[16px]">
                  <IconButton
                    text="Create Watchlist"
                    color="#FFFFFF"
                    bgColor="#2E644E"
                    icon={<IoMdAdd className=" text-white text-[20px]" />}
                    left={true}
                    click={() => setOverlay(1)}
                  />
                </div>
              </div>
            </div>
          </HomeLayout>
        ) : (
          <HomeLayout>
            <Header empty={false} setOverlay={setOverlay} />
            <hr className="my-4" />
            <div className=" flex justify-between items-center">
              <Taps data={data} />
              <div className=" flex gap-4">
                <Actions />
              </div>
            </div>
            <Changes />
          </HomeLayout>
        )}
      </main>
    </>
  );
}
