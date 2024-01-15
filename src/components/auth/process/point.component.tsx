import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Point(props: { hide: boolean; current?: boolean }) {
  const { hide, current } = props;
  return (
    <>
      {hide && (
        <div
          className=" opacity-45 w-10 h-10 bg-transparent rounded-full flex items-center justify-center"
          style={{ border: `2px solid #8BF465` }}
        >
          <div className=" bg-primary  flex w-3 h-3 rounded-full "></div>
        </div>
      )}
      {!hide && current && (
        <div
          className=" w-10 h-10 bg-transparent rounded-full flex items-center justify-center"
          style={{ border: `4px solid #3d623c` }}
        >
          <div
            className=" bg-transparent flex w-full h-full rounded-full "
            style={{ border: "10px solid #8BF465" }}
          ></div>
        </div>
      )}
      {!hide && !current && (
        <div className=" w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <Icon icon={"game-icons:check-mark"} className=" text-black" />
        </div>
      )}
    </>
  );
}
