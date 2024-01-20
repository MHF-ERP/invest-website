import Image from "next/image";
import React from "react";

export default function SmallLogo() {
  return (
    <Image
      src={"/images/smallLogo.png"}
      alt="image"
      width={35}
      height={40}
      className=" absolute left-4 top-6 z-10"
    />
  );
}
