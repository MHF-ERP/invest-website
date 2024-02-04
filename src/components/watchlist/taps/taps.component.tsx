import React from "react";
import Card from "./card.component";
import WatchStore from "@/store/watchlist";

export default function Taps(props: {
  data:
    | []
    | Array<{ id: string; name: string; userId: string; Stocks: any[] }>
    | [];
}) {
  const { data } = props;
  const { tap } = WatchStore();
  return (
    <div className=" flex border border-divider rounded-lg w-fit">
      {data.map((item: any, idx: number) => {
        return (
          <Card
            idx={idx}
            key={idx}
            text={item["name"]}
            rounded={idx === 0 ? 1 : idx === data.length - 1 ? 2 : 0}
            current={idx === tap}
          />
        );
      })}
    </div>
  );
}
