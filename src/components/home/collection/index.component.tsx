import React from "react";
import ViewAll from "../viewAll.component";
import Card from "./card.component";

export default function Collection() {
  return (
    <div className=" border border-divider shadow p-4 py-[20px] rounded-xl flex-1 h-fit flex flex-col gap-3">
      <ViewAll
        title="Stock collections"
        brief="Discover handpicked stock collections"
      />
      <div className=" flex gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
