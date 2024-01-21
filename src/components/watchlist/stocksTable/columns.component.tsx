import Garph from "@/components/graph.component";
import Profile from "@/components/profile.component";
import TextColor from "@/functions/textColor";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Column(props: { last: boolean }) {
  const text = "-2.22";
  const data = [
    [1327359600000, 30.95],
    [1327446000000, 31.34],
    [1327532400000, 31.18],
    [1327618800000, 31.05],
    [1327878000000, 31.0],
    [1327964400000, 30.95],
    [1328050800000, 31.24],
    [1328137200000, 31.29],
    [1328223600000, 31.85],
    [1328482800000, 31.86],
    [1328569200000, 32.28],
    [1328655600000, 32.1],
    [1328742000000, 32.65],
    [1328828400000, 32.21],
    [1329087600000, 32.35],
    [1329174000000, 32.44],
  ];
  const data2 = [
    [1327359600000, 32.95],
    [1327446000000, 31.34],
    [1327532400000, 31.18],
    [1327618800000, 31.05],
    [1327878000000, 31.0],
    [1327964400000, 32.95],
    [1328050800000, 31.24],
    [1328137200000, 31.29],
    [1328223600000, 31.85],
    [1328482800000, 31.86],
    [1328569200000, 32.28],
    [1328655600000, 30.1],
    [1328742000000, 30.65],
    [1328828400000, 30.21],
    [1329087600000, 30.35],
    [1329174000000, 30.44],
  ];
  const cards = [
    {
      data: data,
      text: "+2.33%",
    },
    {
      data: data2,
      text: "-1.33%",
    },
    {
      data: data,
      text: "+2.33%",
    },
    {
      data: data,
      text: "+2.33%",
    },
    {
      data: data,
      text: "+2.33%",
    },
    {
      data: data,
      text: "+2.33%",
    },
    {
      data: data2,
      text: "-1.33%",
    },
    {
      data: data,
      text: "+2.33%",
    },
    {
      data: data,
      text: "+2.33%",
    },
    {
      data: data,
      text: "+2.33%",
    },
  ];
  const { last } = props;
  return (
    <tr className={` w-full ${!last ? "border-b-2" : ""} `}>
      <td className={`  py-4 px-8  `}>
        <Profile />
      </td>
      <td className={`${!last ? "border-b-2" : ""}`}>
        <div className="  flex flex-col  w-fit items-center  ">
          <span className={`${TextColor("-")} font-bold `}>-10000.55</span>
          <span className={`${TextColor("-")}`}>-0.2%</span>
        </div>
      </td>
      <td className="">
        <div className="-mt-10  pr-10  ">
          <Garph
            height=" h-24 "
            height2={120}
            color1={"#F04438"}
            color2={"#F04438"}
            data={data2}
          />
        </div>
      </td>
      <td className="#171D19  font-semibold text-start">42051.94</td>
      <td className="#171D19  font-semibold text-start">42051.94</td>
      <td className="px-8 ">
        <FaRegTrashCan
          className=" cursor-pointer"
          style={{ color: "#EAECF0" }}
        />
      </td>
    </tr>
  );
}
