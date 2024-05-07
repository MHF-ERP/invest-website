"use client";
import WatchList from "@/components/home/watchlist/index.component";
import Daily from "@/components/home/daily";
import WelcomeBox from "./welcomeBox.component";
import HomeLayout from "@/components/layouts/home.layout";
import { useQuery } from "@tanstack/react-query";
import { GetSymbol } from "@/services/home/indices.service";
import { useEffect, useState } from "react";
import { stocksStore } from "@/store/stocks";
import { PREDECT } from "@/static/links";

import Table from "../watchlist/table.component";
import Link from "next/link";

export default function DefHome() {
  const { stocks, setStocks, market } = stocksStore();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["indices"],
    queryFn: () => GetSymbol(setStocks, market),

    enabled: false,
  });

  const [DataUp, setDataUp] = useState<any>();
  const [DataDown, setDataDown] = useState<any>();

  async function getData() {
    await fetch(PREDECT)
      .then((response) => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then((data) => {
        const dataArray = Object.keys(data["predictions"]).map((key) => ({
          id: key,
          prediction: data["predictions"][key].prediction,
          probability: (data["predictions"][key].probability * 100).toFixed(),
        }));
        // Do something with the JSON data
        const Up = dataArray.filter((item) => item.prediction === "Up");
        const Down = dataArray.filter((item) => item.prediction === "Down");

        Up.sort(
          (a, b) => parseFloat(b.probability) - parseFloat(a.probability)
        );
        Down.sort(
          (a, b) => parseFloat(a.probability) - parseFloat(b.probability)
        );
        setDataUp(Up);
        setDataDown(Down);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }
  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    getData();
  }, []);
  const updateDataUp = (newData: any) => {
    setDataUp(newData);
  };

  const updateDataDown = (newData: any) => {
    setDataDown(newData);
  };
  return (
    <HomeLayout>
      <WelcomeBox />

      <div className=" flex flex-col">
        <div className=" flex justify-between items-center w-full px-[16px] py-[20px]  border-l border-r rounded-t-[6px] border-[#E7E7E7] border-t ">
          <span className=" #0B1813 font-[600] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[12px]">
            AI Insights Hub
          </span>
          <Link
            href={"/AllStocks"}
            className=" flex items-center justify-center rounded-2xl px-[8px] py-[12px] text-[12px]  cursor-pointer"
            style={{ border: "1px solid #D0D5DD", color: "#344054" }}
          >
            View all
          </Link>
        </div>
        <div className=" flex xl:flex-row  flex-col">
          {
            <Table
              data={DataUp ? DataUp.slice(0, 5) : ["", "", "", "", ""]}
              updateData={updateDataUp}
              up={true}
            />
          }{" "}
          {
            <Table
              data={DataDown ? DataDown.slice(0, 5) : ["", "", "", "", ""]}
              up={false}
              updateData={updateDataDown}
            />
          }
        </div>
      </div>

      <div className=" flex gap-4  w-full  xl:flex-row lg:flex-row flex-col">
        {!isLoading && stocks && <Daily />}
        {!isLoading && stocks && (
          <WatchList
            data={stocks}
            title="Top Turnover"
            brief="Most traded stocks"
          />
        )}
      </div>
    </HomeLayout>
  );
}
