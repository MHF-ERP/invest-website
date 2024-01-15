"use client";
import Image from "next/image";
import React from "react";
import Process from "./process/process.component";

export default function LeftSection() {
  return (
    <div
      className="h-full relative  overflow-hidden xl:flex lg:flex md:flex  hidden rounded-xl    "
      style={{ width: "500px" }}
    >
      <Image
        width={400}
        height={400}
        src={"/images/login/Section2.png"}
        alt="section"
        className=" h-full object-fill"
        style={{ userSelect: "none", width: "100%" }}
      />
      <Process />
    </div>
  );
}
