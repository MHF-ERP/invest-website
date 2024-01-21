import React from "react";
import IconButton from "../default/iconButton.component";
import { IoMdAdd } from "react-icons/io";

export default function Header() {
  return (
    <div className=" w-full flex items-center justify-between">
      <div className=" flex flex-col">
        <h1 className=" text-headerWatch  text-3xl font-bold">My Watchlist</h1>
        <p className=" text-p">
          Track, manage and forecast your customers and orders.
        </p>
      </div>
      <IconButton
        text="Add"
        color="#FFFFFF"
        bgColor="#2E644E"
        icon={<IoMdAdd />}
        left={false}
      />
    </div>
  );
}
