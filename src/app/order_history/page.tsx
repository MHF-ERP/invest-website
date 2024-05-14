"use client";
import HomeLayout from "@/components/layouts/home.layout";
import Day from "@/components/wallet/day.component";
import { FormatDateWithNames } from "@/functions/formatDateWithNames";
import { GetSymbol } from "@/services/home/indices.service";
import { GetAllStocks } from "@/services/wallet/getAllStocks";
import { GetStocks } from "@/services/watchlist/getStocks.service";
import { stocksStore } from "@/store/stocks";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
const AllPageLayout = dynamic(
  () => import("@/components/layouts/allPage.layout")
);
const Navigator = dynamic(
  () => import("@/components/home/navigator/navigator.component")
);

const Page: NextPage = (req, res) => {
  const [open, setOpen] = useState<number>(-1);
  const { allStocks, market, setAllStocks } = stocksStore();
  const { data, isLoading } = useQuery({
    queryKey: ["wallet"],
    queryFn: () => GetStocks(getCookie("AccessToken")!),

    enabled: true,
  });
  const {} = useQuery({
    queryKey: ["allStocks"],
    queryFn: () => GetAllStocks(setAllStocks),

    enabled: allStocks === null,
  });
  if (!allStocks || !data || allStocks.length === 0) {
    return <div></div>;
  }
  return (
    <AllPageLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Navigator current={3} />
      <HomeLayout>
        <div className=" flex justify-between items-center">
          <div className=" flex flex-col">
            <h1 className=" text-headerWatch  text-[32px] font-bold">
              Order History
            </h1>
            <p className=" text-[#45564B] text-[16px]">
              Track and monitor your investment portfolio with ease
            </p>
          </div>
          <div className="  flex justify-center flex-col items-center">
            <span className=" mb-[12px] text-success xl:text-[34px] lg:text-[34px] md:text-[34px] text-[21px] font-[700]">
              {!isLoading && data && data["balance"]}
            </span>
            <span className=" text-slate-400 text-[14px]">
              {!isLoading &&
                data &&
                FormatDateWithNames(data["lastTransaction"])}
            </span>
          </div>
        </div>

        <hr />
        {!isLoading && data && allStocks && allStocks.length > 0 && (
          <div className=" flex flex-col gap-3">
            {!isLoading &&
              data &&
              data["myStocks"].map((item: any, idx: number) => {
                const item2 =
                  allStocks &&
                  allStocks.length > 0 &&
                  allStocks.filter((it: any) => it.symbol === item.symbol)[0];

                if (item2) {
                  return (
                    <Day
                      key={idx}
                      setOpen={setOpen}
                      open={idx === open}
                      idx={idx + 1}
                      item={item}
                      item2={item2}
                      current={open}
                    />
                  );
                }
              })}
          </div>
        )}
      </HomeLayout>
    </AllPageLayout>
  );
};

export default Page;
