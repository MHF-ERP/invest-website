"use client";
import Verification from "@/components/auth/bodies/verification.component";
import RightSection from "@/components/auth/rightSection.component";
import Logo from "@/components/default/logo";
import Forget from "@/components/home/forget/bodies/main.component";
import SetPassword from "@/components/home/forget/bodies/setPassword.component";
import Success from "@/components/home/forget/bodies/success.component";
import Pattern from "@/components/home/forget/pattern.component";
import forgetStore from "@/store/forget";
import React from "react";

export default function page() {
  const { increment, email, count } = forgetStore();
  const page = [
    {
      layout: <Forget />,
      header: "Forgot password?",
      brief: "No worries, we’ll send you reset instructions",
    },
    {
      layout: <Verification inc={increment} />,
      header: "Verification Code",
      brief: `We sent a verification code to ${email}`,
    },
    {
      layout: <SetPassword />,
      header: "Set new password",
      brief:
        "Your new password must be different to previously used passwords.",
    },
    {
      layout: <Success />,
      header: "Password reset",
      brief:
        "Your password has been successfully reset. Click below to log in.",
    },
  ];
  return (
    <main className=" bg-background flex  h-screen max-w-screen">
      <Logo />
      <Pattern />
      <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <RightSection
          idx={count}
          key={count}
          back={count !== 1}
          body={page[count]["layout"]}
          header={page[count]["header"]}
          brief={page[count]["brief"]}
        />
      </div>
    </main>
  );
}
