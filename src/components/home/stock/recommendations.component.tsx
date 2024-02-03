import TextColor from "@/functions/textColor";
import Image from "next/image";
import React from "react";

export default function Recommendations() {
  const data = [
    {
      image: "/images/companies/orange.png",
      title: "NVIDIA Corp",
      value: "+3.89%",
    },
    {
      image: "/images/companies/orange.png",
      title: "NVIDIA Corp",
      value: "0.00%",
    },
    {
      image: "/images/companies/orange.png",
      title: "NVIDIA Corp",
      value: "-2.89%",
    },
    {
      image: "/images/companies/orange.png",
      title: "NVIDIA Corp",
      value: "+3.89%",
    },
    {
      image: "/images/companies/orange.png",
      title: "NVIDIA Corp",
      value: "+3.89%",
    },
  ];
  return (
    <div className=" border border-divider shadow p-[21px] mt-1 rounded-xl flex-1 flex flex-col gap-3 h-fit">
      <h1 className=" font-bold text-main">You may also like</h1>
      <div className=" xl:hidden lg:hidden md:hidden mt-3 justify-between items-center flex">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={` gap-2 ${
                index > 2 ? "hidden" : "flex"
              }  flex-col items-center text-center`}
            >
              <Image
                alt="stock image"
                width={56}
                height={56}
                src={item["image"]}
                className=" rounded-lg"
              />
              <div className=" flex flex-col gap-10">
                <span className=" font-semibold  text-[14px]">
                  {item["title"]}
                </span>
                <span
                  className={`  text-[14px] ${
                    item["value"][0] === "+"
                      ? "text-success"
                      : `${
                          item["value"][0] === "-"
                            ? "text-decrease"
                            : "text-main2"
                        }`
                  }`}
                >
                  {item["value"]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" xl:flex lg:flex md:flex  mt-[12px] justify-between items-center hidden">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-2 px-[12px]`}
            >
              <Image
                alt="stock image"
                width={56}
                height={56}
                src={item["image"]}
                className=" rounded-lg"
              />
              <div className=" flex flex-col ">
                <span className=" font-semibold text-[14px]">
                  {item["title"]}
                </span>
                <span
                  className={` font-bold text-[14px] ${TextColor(
                    item["value"][0]
                  )}`}
                >
                  {item["value"]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
