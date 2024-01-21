import { tapsData } from "@/static/taps";
import React from "react";
import Card from "./card.component";

export default function Taps() {
  return (
    <div className=" flex border border-divider rounded-lg w-fit">
      {tapsData.map((item: string, idx: number) => {
        return (
          <Card
            key={idx}
            text={item}
            rounded={idx === 0 ? 1 : idx === tapsData.length - 1 ? 2 : 0}
            current={idx === 0}
          />
        );
      })}
    </div>
  );
}
