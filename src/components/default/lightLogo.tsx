import Image from "next/image";
import React from "react";

export default function LightLogo() {
  return (
    <Image
      src={"/images/lightLogo.png"}
      alt="image"
      width={120}
      height={120}
      className=" absolute left-10 top-10 z-10"
    />
  );
}
