import Profile from "@/components/profile.component";
import Remove from "@/icons/remove.icon";
import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ProfileStock(props: {
  data: any;
  id: string;
  setWatchlistId: any;
  setOverlay: any;
  setSymbol: any;
  symbol: string;
}) {
  const { id, setWatchlistId, setOverlay, setSymbol, symbol } = props;
  return (
    <div className=" flex justify-between items-center">
      <Profile data={props.data} />
      <Remove
        watchId={id}
        setWatchlistId={setWatchlistId}
        setOverlay={setOverlay}
        setSymbol={setSymbol}
        symbol={symbol}
      />
    </div>
  );
}
