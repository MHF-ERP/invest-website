import SearchIcon from "@/icons/search.component";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { cn } from "@/lib/cn";
import { stocksStore } from "@/store/stocks";
import Link from "next/link";

export default function Search(props: {
  HomeClassName?: string;
  change: boolean;
  setData2?: any;
  allData?: any;
}) {
  const { HomeClassName, change, setData2, allData } = props;
  const { stocks } = stocksStore();
  const [data, setData] = useState<any>();
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    <div
      className={cn(
        "   w-full border   border-[#D0D5DD] relative  px-2 py-2 text-sm flex gap-2 items-center rounded-md ",
        HomeClassName
      )}
    >
      <SearchIcon color="#667085" />
      <input
        placeholder="Search"
        onChange={(e) => {
          if (stocks) {
            const help = stocks.filter((item: any) =>
              item["companyName"].startsWith(toTitleCase(e.target.value))
            );
            if (e.target.value === "") {
              if (change) {
                console.log("slkl");
                console.log(allData);
                setData2(allData);
              } else {
                setData([]);
              }
            } else {
              if (change) {
                const sortedData1 = help.map((item: any) =>
                  allData.find((obj: any) => obj.id === item.symbol)
                );

                const filteredData1 = sortedData1.filter(
                  (item: any) => item !== undefined
                );

                setData2(filteredData1);
              } else {
                setData(help);
              }
            }
          }
        }}
        className="placeholder:text-[16px] placeholder:font-[400] w-full outline-none"
      />
      <div className=" flex flex-col bg-white absolute max-h-[300px]  overflow-y-auto gap-4   top-[40px] left-0 z-20 w-full shadow-lg rounded-b-lg ">
        {data &&
          !change &&
          data.length > 0 &&
          data.map((item: any, key: number) => {
            return (
              <Link
                className={` px-4  hover:bg-slate-300 ${
                  key === 0 ? "pt-4" : ""
                } pt-2 pb-2 -mt-2  text-black`}
                key={key}
                href={"/stock/" + item["symbol"]}
              >
                {item["companyName"]}{" "}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
