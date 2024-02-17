"use client";
import Stock from "@/components/home/stock/index.component";
import AddList from "@/components/watchlist/popup/AddList.component";
import CreateList from "@/components/watchlist/popup/createList.component";
import { stocksStore } from "@/store/stocks";
import WatchStore from "@/store/watchlist";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AllPageLayout = dynamic(
  () => import("@/components/layouts/allPage.layout")
);
const Navigator = dynamic(
  () => import("@/components/home/navigator/navigator.component")
);
const DefHome = dynamic(() => import("@/components/home/main/index.component"));
// const AllPageLayout = dynamic(() => import('@/components/layouts/allPage.layout'))

const StockPage: NextPage = (req, res) => {
  const { overlay, updateOverlay } = WatchStore();
  const pathName = usePathname();
  // console.log(pathName.split("/").pop());

  return (
    <>
      {overlay !== 0 && <AddList />}
      {overlay !== 0 && (
        <div
          className=" bg-[#0C111D] w-screen
           h-screen  opacity-60 absolute top-0 left-0 z-10"
        ></div>
      )}

      <main
        className={`  flex  h-screen max-w-screen  ${
          overlay !== 0 ? "over" : ""
        } bg-[#1F332B]`}
      >
        <Navigator current={1} />
        <Stock />
      </main>
    </>
  );
};

export default StockPage;
