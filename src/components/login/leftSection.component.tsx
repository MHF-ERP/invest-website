import Image from "next/image";
import React, { useState } from "react";

export default function LeftSection() {
  return (
    <div className="h-full py-3 relative w-1/2 overflow-hidden xl:flex lg:flex md:flex  hidden rounded-2xl  items-center justify-center  ">
      <Image
        width={700}
        height={700}
        src={"/images/login/Section.png"}
        alt="section"
        className=" h-full absolute top-0 left-0 z-1"
        style={{ userSelect: "none" }}
      />
      <div className=" items-center justify-center flex flex-col ">
        <Image
          width={450}
          height={450}
          src={"/images/login/Mockup.png"}
          alt="section"
          className=" z-10"
          style={{ userSelect: "none" }}
        />
        <Image
          width={350}
          height={350}
          src={"/images/login/title.png"}
          alt="section"
          className=" z-10"
          style={{ userSelect: "none" }}
        />
        <p className=" text-white z-10 text-center mt-1">
          Start investing today and your future will change <br /> for the
          better.
        </p>
      </div>
    </div>
  );
}
