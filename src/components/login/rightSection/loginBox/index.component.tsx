import React from "react";
import Header from "../../../auth/header.component";
import Body from "./body.component";

export default function LoginBox() {
  return (
    <div className=" bg-white px-6 py-8 rounded-lg w-96 shadow-xl">
      <Header
        title={"Log in"}
        brief={"Welcome back! Please enter your details."}
      />
      <Body />
    </div>
  );
}
