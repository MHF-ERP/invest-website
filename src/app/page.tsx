import LightLogo from "@/components/default/lightLogo";
import Logo from "@/components/default/logo";
import LeftSection from "@/components/login/leftSection.component";
import RightSection from "@/components/login/rightSection/index.component";

import React from "react";

export default function Home() {
  return (
    <div
      className={`w-screen h-screen p-2  flex flex-row overflow-hidden xl:bg-background lg:bg-background md:bg-background  bg-main`}
    >
      <LightLogo />
      <LeftSection />
      <RightSection />
    </div>
  );
}
