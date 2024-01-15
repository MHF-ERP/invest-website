import process from "@/store/process";
import React from "react";
import VerificationInput from "react-verification-input";
//import VerificationInput from "react-verification-input";
export default function Verification() {
  const { increment } = process();
  const handleVerificationChange = (value: string) => {
    console.log(value);
  };
  return (
    <form className=" flex flex-col gap-3 items-center">
      <VerificationInput
        autoFocus
        placeholder=""
        length={4}
        validChars="0-9"
        onChange={handleVerificationChange}
      />

      <button
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
        onClick={() => increment()}
      >
        Verify
      </button>
    </form>
  );
}
