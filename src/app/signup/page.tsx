"use client";
import LeftSection from "@/components/auth/leftSection.component";
import RightSection from "@/components/auth/rightSection.component";

import Logo from "@/components/default/logo";

import React from "react";

import Signup from "@/components/auth/bodies/signup.component";
import Personal from "@/components/auth/bodies/personal.component";
import Verification from "@/components/auth/bodies/verification.component";
import ID from "@/components/auth/bodies/ID.component";
import Pin from "@/components/auth/bodies/pin.component";
import useStore from "@/store";

const page = [
  {
    layout: <Signup />,
    header: "Account Setup",
    brief: "Please provide your email and password ",
  },
  {
    layout: <Personal />,
    header: "Personal Information",
    brief:
      "Please type your first and last names exactly as they appear on your national or passport ID.",
  },
  {
    layout: <Verification />,
    header: "Verification Code",
    brief: "We sent a verification code to +20166815505",
  },
  {
    layout: <ID />,
    header: "ID Verification",
    brief: "Securely submit identification details",
  },
  {
    layout: <Pin />,
    header: "PIN Setup",
    brief: "Set up a 4-digit PIN",
  },
];
export default function Page() {
  const { count, increment, decrement } = useStore();

  return (
    <main
      className={`w-screen h-screen p-2  flex flex-row overflow-hidden xl:bg-background lg:bg-background md:bg-background  bg-main`}
    >
      <Logo />
      <LeftSection />

      <RightSection
        key={count}
        back={count > 0}
        body={page[count]["layout"]}
        header={page[count]["header"]}
        brief={page[count]["brief"]}
      />
    </main>
  );
}
