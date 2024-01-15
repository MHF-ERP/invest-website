import Header from "@/components/auth/header.component";
import useStore from "@/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function RightSection(props: {
  body: any;
  back?: boolean;
  header: string;
  brief: string;
}) {
  const { decrement } = useStore();

  const { body, back, header, brief } = props;
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
          onClick={() => decrement()}
        >
          <Icon icon={"ep:back"} />
          <span className=" font-bold">Back</span>
        </div>
      )}
    </div>
  );
}
