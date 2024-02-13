"use client";
import dynamic from "next/dynamic";

import { GetWatchLists } from "@/services/watchlist/getWatchLists.service";
import WatchStore from "@/store/watchlist";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
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

export default function Page() {
  const { updateData, data } = WatchStore();
  return (
    <>
      <main className={`  flex  h-screen max-w-screen  bg-[#1F332B] `}>
        <Navigator current={3} />

        {data && data !== undefined && data.length === 0 ? (
          <HomeLayout>
            <Header empty={true} WithoutIcon />
            <hr className="my-4" />
            <div
              className=" flex items-center justify-center"
              style={{ width: "100%", height: "75vh" }}
            >
              <div className=" flex items-center flex-col gap-[4px]">
                <Image
                  src={"/images/portfolioEmpty.png"}
                  alt="empty"
                  width={150}
                  height={150}
                />
                <h1 className=" text-[20px] font-[600] text-[#0B0E0C]">
                  Your portfolio is empty
                </h1>
                <p className=" text-[14px] text-[#45564B] font-[400]">
                  Start exploring opportunities by investing in markets
                </p>
              </div>
            </div>
          </HomeLayout>
        ) : (
          <HomeLayout>
            <Header empty={false} WithoutIcon />
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
