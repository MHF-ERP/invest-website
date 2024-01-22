import Header from "@/components/auth/header.component";
import { process } from "@/store/process";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React from "react";

export default function RightSection(props: {
  idx: number;
  body: any;
  back?: boolean;
  header: string;
  brief: string;
  func: any;
}) {
  const { body, back, idx, header, brief, func } = props;
  const router = useRouter();
  return (
    <div
      className=" xl:mt-0 lg:mt-0 md:mt-0 mt-20 flex flex-col items-center justify-center xl:gap-6 lg:gap-6 md:gap-6 gap-2   "
      style={{ width: "100%" }}
    >
      <div className=" flex items-center justify-center    ">
        <div className=" bg-white  w-fit px-6 py-8 rounded-lg  shadow-xl">
          <Header title={header} brief={brief} />
          {body}
        </div>
      </div>
      {back && (
        <div
          className=" flex items-center  gap-2 font-bold cursor-pointer"
          onClick={() => (idx === 0 ? router.replace("/") : func())}
        >
          <Icon icon={"ep:back"} />
          <span className=" font-bold">Back</span>
        </div>
      )}
    </div>
  );
}
