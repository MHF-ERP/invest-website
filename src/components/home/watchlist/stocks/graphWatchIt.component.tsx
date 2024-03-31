import Garph from "@/components/graph.component";
import { changeDate, formatDate } from "@/functions/formatDate";
import { GetHistorical } from "@/services/home/getHistorical";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

export default function GraphWatchIt(props: { symbol: string; text: string }) {
  const { symbol, text } = props;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Historical"],
    queryFn: () =>
      GetHistorical(symbol, formatDate(new Date()), changeDate(new Date(), 1)),

    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className=" -mt-10">
      {data && (
        <Garph
          data={data}
          height="h-40"
          height2={180}
          color1={text.toString()[0] !== "-" ? "#17B26A" : "#F04438"}
          color2={text.toString()[0] !== "-" ? "#17B26A" : "#F04438"}
        />
      )}
    </div>
  );
}
