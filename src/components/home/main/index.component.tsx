import Indices from "@/components/home/main/indices.component";
import Card from "@/components/home/main/card.component";
import WatchList from "@/components/home/watchlist/index.component";
import Daily from "@/components/home/daily";
import GraphBox from "./graphBox.component";
import WelcomeBox from "./welcomeBox.component";
import HomeLayout from "@/components/layouts/home.layout";
import Apex from "@/components/apex.component";
import { useQuery } from "@tanstack/react-query";
import { GetSymbol } from "@/services/home/indices.service";
import { STOCKS_DATA } from "@/static/stocks";
import { useEffect, useState } from "react";
import { stocksStore } from "@/store/stocks";

export default function DefHome() {
  const stocksData = [
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
  ];
  const { stocks, setStocks } = stocksStore();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["indices"],
    queryFn: () => GetSymbol(setStocks),

    enabled: false,
  });
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <HomeLayout>
      <WelcomeBox />
      <Indices />
      {!isLoading && (
        <div className="  flex gap-4 overflow-x-scroll w-full cat  cursor-grab overflow-y-hidden h-[110px] ">
          {stocksData.map((item: any, idx: number) => {
            return <Card key={idx} />;
          })}
        </div>
      )}

      <GraphBox title={"Sales Report"} stock={false} />
      <div className=" flex gap-4  w-full  xl:flex-row lg:flex-row md:flex-row flex-col">
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
