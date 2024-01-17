import userStore from "@/store/user";
import React from "react";

export default function Welcome() {
  const { name } = userStore();

  return (
    <div className=" flex flex-col">
      <h1 className=" text-main font-bold text-3xl">Welcome back, {name}</h1>
      <p className="text-p text-m">
        Track, manage and forecast your customers and orders.
      </p>
    </div>
  );
}
