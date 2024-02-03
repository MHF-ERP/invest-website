"use client";
import React from "react";
import Score from "./score.component";
import Statics from "./statics.component";
import ApexChart from "@/components/home/main/graph.component";

export default function BodyOfGraphBox() {
  return (
    <div className="w-full flex gap-5">
      <ApexChart title="Performance" />
      <div className=" flex flex-col gap-3" style={{ minWidth: "25%" }}>
        <Score />
        <Statics />
      </div>
    </div>
  );
}
