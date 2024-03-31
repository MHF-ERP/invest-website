import React from "react";

export default function About(props: { data: any }) {
  const { data } = props;
  const boxes = [
    {
      title: "CEO",
      value: data?.ceo,
    },
    {
      title: "Phone",
      value: data?.phone,
    },
    {
      title: "City",
      value: data?.city,
    },
    {
      title: "HQ",
      value: data?.address,
    },
  ];
  return (
    <div className=" border border-divider shadow p-[21px] rounded-xl flex-1 flex flex-col gap-3">
      <h1 className=" font-bold text-[#0B0E0C] text-[16px] ">About</h1>
      <p className=" text-[16px] text-[#26312A] font-[400] ">
        {data?.description}
      </p>
      <hr className=" border-divider border" />
      <div className=" flex justify-between items-center w-full">
        {boxes.map((item: any, idx: number) => {
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
