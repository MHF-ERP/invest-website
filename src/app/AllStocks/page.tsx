"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import HomeLayout from "@/components/layouts/home.layout";
import Table2 from "@/components/home/watchlist/table2.component";
import { stocksStore } from "@/store/stocks";
import { useQuery } from "@tanstack/react-query";
import { GetSymbol } from "@/services/home/indices.service";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Search from "@/components/home/main/search.component";
import AddList from "@/components/watchlist/popup/AddList.component";
import WatchStore from "@/store/watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "@mui/material/Pagination";

const AllPageLayout = dynamic(
  () => import("@/components/layouts/allPage.layout")
);
const Navigator = dynamic(
  () => import("@/components/home/navigator/navigator.component")
);
export default function Page() {
  const {
    stocks,
    setStocks,
    market,
    setDataUp,
    setDataDown,
    setOriginData,
    setData,
    originData,
    data2,
  } = stocksStore();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["indices2"],
    queryFn: () =>
      GetSymbol(
        setStocks,
        market,
        true,
        setDataUp,
        setDataDown,
        true,
        setOriginData,
        setData
      ),

    enabled: stocks === null || data2 === null,
  });

  const [rowsToShow, setRowsToShow] = useState(0);
  const [page, setPage] = useState(1);
  const updateData2 = (newData: any) => {
    setData(newData);
  };

  const { overlay, updateOverlay } = WatchStore();
  const [symbol, setSymbol] = useState("");
  return (
    <AllPageLayout>
      <Head>
        <title>All Stocks</title>
      </Head>
      <ToastContainer />
      {overlay !== 0 && <AddList symbol={symbol} />}
      {overlay !== 0 && (
        <div
          onClick={() => updateOverlay(0)}
          className=" bg-[#0C111D] w-screen
           h-screen   opacity-60 absolute top-0 left-0 z-20"
        ></div>
      )}
      <div className={` ${overlay !== 0 && "over"} w-full h-full flex `}>
        <Navigator current={1} />
        <HomeLayout>
          <div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center">
            <div className=" flex flex-col">
              <h1 className=" text-main font-bold text-3xl">All Stocks</h1>
              <p className="text-p text-m">
                Follow the stocks you need to track and add it to your
                watchlist.
              </p>
            </div>
            <Search
              HomeClassName=" xl:w-[25%] lg:w-[25%] md:w-[50%] w-full xl:mt-[0px] lg:mt-[0px] md:mt-[0px] mt-[5px]"
              change={true}
              allData={originData && originData}
              setData2={setData}
            />
          </div>
          <div className=" flex flex-col justify-between h-full ">
            <div>
              {data2 && data2.length !== 0 && (
                <Table2
                  allData={data2}
                  setData={setData}
                  setOverlay={updateOverlay}
                  setSymbol={setSymbol}
                  data={data2.slice(
                    page * rowsToShow,
                    page * rowsToShow + rowsToShow
                  )}
                  updateData={updateData2}
                  setRowsToShow={setRowsToShow}
                />
              )}
              {!data2 && (
                <Table2
                  setOverlay={updateOverlay}
                  setSymbol={setSymbol}
                  allData={data2}
                  setData={setData}
                  setRowsToShow={setRowsToShow}
                  updateData={updateData2}
                  data={[
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",

                    "",
                    "",
                    "",
                    "",

                    "",
                    "",
                    "",
                    "",
                  ].slice(0, rowsToShow)}
                />
              )}
            </div>
            <div className=" pt-[20px]">
              <hr />
              <div className=" w-full pt-[20px] flex justify-between items-center  ">
                {data2 &&
                  data2.length > 0 &&
                  Math.ceil(data2.length / rowsToShow) > 1 && (
                    <Pagination
                      count={Math.ceil(data2.length / rowsToShow)}
                      variant="outlined"
                      color="primary"
                      onChange={(e, page) => setPage(page)}
                      sx={{
                        width: "100%", // Make the Pagination take the full width
                        "& .MuiPagination-ul": {
                          justifyContent: "center", // Create space between next and back icons in numbers section
                        },
                        "& .MuiPaginationItem-root.Mui-selected": {
                          backgroundColor: "#4CAF50",
                          color: "#FFF",
                          border: 0,
                        },
                      }} // Style for selected page
                    />
                  )}
              </div>
            </div>
          </div>
        </HomeLayout>
      </div>
    </AllPageLayout>
  );
}
