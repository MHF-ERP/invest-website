import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Card() {
  return (
    <div className=" flex flex-col min-w-60 border-2 border-bord p-4 rounded-2xl shadow-sm">
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
        <Image
          width={500}
          height={500}
          src="/images/home/inc.png"
          alt="increase image"
        />
      </div>
    </div>
  );
}
