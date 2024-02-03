import React from "react";

export default function About() {
  const data = [
    {
      title: "CEO",
      value: "Jensen Huang",
    },
    {
      title: "Employees",
      value: "26.1 K",
    },
    {
      title: "Founded",
      value: "1996",
    },
    {
      title: "HQ",
      value: "Santa Clara, CA, USA",
    },
  ];
  return (
    <div className=" border border-divider shadow p-[21px] rounded-xl flex-1 flex flex-col gap-3">
      <h1 className=" font-bold text-[#0B0E0C] text-[16px] ">About</h1>
      <p className=" text-[16px] text-[#26312A] font-[400] ">
        Nvidia is a leading developer of graphics processing units.
        Traditionally, GPUs were used to enhance the experience on computing
        platforms, most notably in gaming applications on PCs. GPU use cases
        have since emerged as important semiconductors used in artificial
        intelligence. Nvidia not only offers AI GPUs, but also a software
        platform, Cuda, used for AI model development and training. Nvidia is
        also expanding its data center networking solutions, helping to tie GPUs
        together to handle complex workloads.
      </p>
      <hr className=" border-divider border" />
      <div className=" flex justify-between items-center w-full">
        {data.map((item: any, idx: number) => {
          return (
            <div key={idx} className=" flex flex-col">
              <span
                className=" font-semibold text-[14px]"
                style={{ color: "#6B8373" }}
              >
                {item["title"]}
              </span>
              <span
                className=" font-semibold text-[16px]"
                style={{ color: "#26312A" }}
              >
                {item["value"]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
