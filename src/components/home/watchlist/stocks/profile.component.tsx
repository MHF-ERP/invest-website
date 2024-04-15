import Profile from "@/components/profile.component";
import Remove from "@/icons/remove.icon";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function ProfileStock(props: {
  data: any;
  setWatchlistId: any;
  setOverlay: any;
  setSymbol: any;
  symbol: string;
}) {
  const { setWatchlistId, setOverlay, setSymbol, symbol } = props;
  return (
    <div className=" flex justify-between items-center">
      <Profile data={props.data} />
      <BsThreeDots
        className=" cursor-pointer"
        onClick={() => {
          setOverlay(1);
          setWatchlistId(props.data);
        }}
      />

      {/* <Remove
        setWatchlistId={setWatchlistId}
        setOverlay={setOverlay}
        setSymbol={setSymbol}
        symbol={symbol}
      /> */}
    </div>
  );
}
