import React from "react";
import Card from "./card.component";
import { useQuery } from "@tanstack/react-query";
import { stocksStore } from "@/store/stocks";
import { GetNews } from "@/services/news.service";

export default function News(props: { symbolId: string }) {
  const { market } = stocksStore();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["News"],
    queryFn: () => GetNews(market, props.symbolId),
    enabled: true,
  });
  return (
    <div
      className=" border border-divider shadow p-[21px] rounded-xl   flex flex-col gap-5 h-[92%] overflow-hidden"
      style={{ minWidth: "25%" }}
    >
      <h1 className=" font-bold text-main">Relevant News</h1>
      <div className="  gap-1 flex-col xl:flex lg:flex ">
        {!isLoading &&
          data &&
          data.slice(0, 7).map((item: any, idx: number) => {
            return (
              <>
                <Card item={item} key={idx} />
                {idx !== data.length - 1 && (
                  <hr className=" border border-news my-2" />
                )}
              </>
            );
          })}
      </div>
    </div>
  );
}
