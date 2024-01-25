import Link from "next/link";
import React from "react";
import Point from "./point.component";
import { PROCESS } from "../../../static/process";
import { process } from "@/store/process";

export default function Process() {
  const { count } = process();

  return (
    <div className=" xl:pt-8r lg:pt-6r  pt-5r px-10 h-full flex justify-between flex-col absolute left-0">
      <div className=" flex flex-col gap-1">
        {PROCESS.map((item, idx) => {
          return (
            <div key={idx}>
              <div className=" flex gap-3" key={idx}>
                <div className=" flex flex-col items-center gap-1">
                  <Point hide={idx > count} key={idx} current={idx === count} />

                  {idx + 1 < PROCESS.length && (
                    <hr
                      className={` xl:h-6 lg:h-6 h-3 ${
                        idx >= count ? "opacity-45" : ""
                      } border-none `}
                      style={{
                        borderLeft: "2px solid #8BF465",
                      }}
                    />
                  )}
                </div>

                <div className={` ${idx > count ? "opacity-45" : ""} text-xs`}>
                  <h1 className=" text-primary">{item["title"]}</h1>
                  <p className=" text-secondary">{item["brief"]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex w-full gap-1 xl:pb-4r pb-2r text-xs text-center items-center justify-center">
        <p className=" text-white">Already have an account?</p>
        <Link href={"/"} className=" text-primary hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
