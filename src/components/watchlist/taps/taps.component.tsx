import React from "react";
import Card from "./card.component";

export default function Taps(props: { data: [] }) {
  const { data } = props;
  return (
    <div className=" flex border border-divider rounded-lg w-fit">
      {data.map((item: any, idx: number) => {
        console.log(item);
        return (
          <Card
            key={idx}
            text={item["name"]}
            rounded={idx === 0 ? 1 : idx === data.length - 1 ? 2 : 0}
            current={idx === 0}
          />
        );
      })}
    </div>
  );
}
