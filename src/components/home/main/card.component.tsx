import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import Garph from "@/components/graph.component";

export default function Card() {
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
  return (
    <div className=" flex flex-col min-w-60 h-fit  border-2 border-bord p-4 rounded-2xl shadow-sm">
      <div className=" w-full flex gap-2 items-center">
        <Image
          width={20}
          height={20}
          style={{ border: "2px solid #ACCDB7" }}
          src="/images/home/flag.png"
          className=" w-6 h-6 rounded-3xl"
          alt="flag image"
        />
        <span className=" text-p text-sm font-semibold">ESP35</span>
      </div>
      <div className=" flex justify-between items-center">
        <div className=" flex flex-col">
          <p className=" text-2xl font-bold" style={{ color: "#0B0E0C" }}>
            1017012
          </p>
          <div className=" flex gap-2 items-center text-xl font-bold">
            <FaArrowTrendUp className=" text-success" />

            <span className=" font-bold text-success">0.18%</span>
          </div>
        </div>
        <Garph
          data={data}
          height="h-20"
          height2={100}
          color1="#2E644E"
          color2="#9AFF9A"
        />
      </div>
    </div>
  );
}
