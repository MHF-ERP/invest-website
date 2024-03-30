import React from "react";
import Welcome from "./welcome.component";
import Search from "./search.component";

export default function WelcomeBox() {
  return (
    <div className=" flex justify-between items-center xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-0 lg:gap-0 md:gap-0 gap-2">
      <Welcome />
      <Search HomeClassName={" xl:w-[25%] xl:w-[25%] md:w-[25%] w-[57%]"} />
    </div>
  );
}
