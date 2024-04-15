"use client";
import React from "react";
import Score from "./score.component";
import Statics from "./statics.component";
import ApexChart from "@/components/home/main/graph.component";
import SmallAi from "../smallAi.component";

export default function BodyOfGraphBox(props: {
  id: string;
  item: any;
  loading?: boolean;
}) {
  const { item, loading } = props;

  return (
    <div className="w-full flex gap-5 xl:flex-row lg:flex-row md:flex-row flex-col">
      {<ApexChart title="Performance" />}
      <div className=" flex flex-col gap-3" style={{ minWidth: "25%" }}>
        {<SmallAi id={props.id} loading={loading} />}
        {/* <Score symbol={props.id} /> */}
        {<Statics stock={props.item} loading={loading} />}{" "}
      </div>
    </div>
  );
}
