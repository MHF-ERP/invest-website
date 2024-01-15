import React from "react";
import LoginBox from "./loginBox/index.component";

export default function RightSection() {
  return (
    <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex items-center justify-center">
      <LoginBox />
    </div>
  );
}
