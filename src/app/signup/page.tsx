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
import { process } from "@/store/process";
import { ToastContainer } from "react-toastify";
import { signUpObj } from "@/store/signUpObj";
import LightLogo from "@/components/default/lightLogo";

export default function Page() {
  const { email, token } = signUpObj();
  const { increment } = process();
  const { count, decrement } = process();

  const page = [
    {
      layout: <Signup />,
      header: "Account Setup",
      brief: "Please provide your email and password ",
    },
    {
      layout: <Verification inc={increment} />,
      header: "Verification Code",
      brief: `We sent a verification code to ${email}`,
    },
    {
      layout: <Personal />,
      header: "Personal Information",
      brief:
        "Please type your first and last names exactly as they appear on your national or passport ID.",
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

  return (
    <main
      className={`w-screen h-screen p-2  flex flex-row overflow-hidden xl:bg-background lg:bg-background md:bg-background  bg-main`}
    >
      <LightLogo />
      <LeftSection />

      <RightSection
        idx={count}
        key={count}
        back={count > 2}
        body={page[count]["layout"]}
        header={page[count]["header"]}
        brief={page[count]["brief"]}
        func={decrement}
      />
    </main>
  );
}
