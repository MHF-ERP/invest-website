import process from "@/store/process";
import React, { useState } from "react";
import VerificationInput from "react-verification-input";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import requestService from "@/static/requests";
import { VERIFY } from "@/static/links";
//import VerificationInput from "react-verification-input";
export default function Verification(props: { inc: any }) {
  const [code, setCode] = useState<string>("");
  const notify = async (error: string) => toast.error(error);
  const { inc } = props;
  const mutation = useMutation({
    mutationFn: (e) => {
      return handel(e);
    },
  });
  const { increment } = process();
  const handleVerificationChange = (value: string) => {
    setCode(value);
  };
  return (
    <form
      className=" flex flex-col gap-3 items-center"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <VerificationInput
        autoFocus
        placeholder=""
        length={4}
        validChars="0-9"
        onChange={handleVerificationChange}
      />

      <button
        disabled={mutation.isPending}
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {mutation.isPending ? "Loading" : "Verify"}
      </button>
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();

    // Code Validation
    if (code.length < 4) {
      return notify("Verification code cannot be less than 4 digits");
    }
    // handel request
    const requestJson = JSON.stringify({
      otp: code,
    });
    // send Request
    inc();
    // const response = await requestService.post(VERIFY, requestJson);
    // if (response["status"] === 401) {
    //   return notify("Code isnot correct");
    // } else if (response["status"] === 200) {
    //   increment();
    // }
  }
}
