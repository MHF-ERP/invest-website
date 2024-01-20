"use client";
import ApexChart from "@/components/home/main/graph.component";
import WatchList from "../watchlist/index.component";
import Score from "../stock/score.component";
import Statics from "../stock/statics.component";

export default function GraphBox(props: { title: string; stock: boolean }) {
  const { title, stock } = props;

  const watchData = [
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

  return (
    <div className=" flex gap-4 mt-4  w-full xl:flex-row lg:flex-row md:flex-row flex-col ">
      <ApexChart title={title} />
      {!stock && <WatchList data={watchData} title="Watchlist" />}
      {stock && (
        <div className=" flex flex-col gap-3" style={{ minWidth: "35%" }}>
          <Score />
          <Statics />
        </div>
      )}
    </div>
  );
}
