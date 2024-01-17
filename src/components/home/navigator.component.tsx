"use client";

import Logo from "../default/logo";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navigator(props: { current: number }) {
  const { current } = props;
  const Taps = [
    {
      icon: "iconoir:home",
      name: "Home",
    },
    {
      icon: "heroicons-outline:chart-square-bar",
      name: "Watchlist",
    },
    {
      icon: "pajamas:todo-done",
      name: "Discover",
    },
  ];
  return (
    <div className=" h-full w-60">
      <Logo />
      <div className=" flex flex-col gap-3 pt-20 px-4 text-white text-md">
        {Taps.map((item: { icon: string; name: string }, idx: number) => {
          return (
            <div
              key={idx}
              className={` flex items-center gap-3 py-2 px-2 w-full ${
                idx + 1 === current ? "bg-main2 font-bold" : ""
              } rounded-lg `}
            >
              <Icon icon={item["icon"]} className=" text-lg" />
              <span>{item["name"]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
