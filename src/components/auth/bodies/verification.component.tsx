import React, { useState } from "react";
import VerificationInput from "react-verification-input";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import verificationServices from "@/services/signup/verification,service";

export default function Verification(props: { inc: any }) {
  const [code, setCode] = useState<string>("");
  const { inc } = props;
  const mutation = useMutation({
    mutationFn: (e) => {
      return verificationServices(e, code, inc);
    },
  });
  const handleVerificationChange = (value: string) => {
    setCode(value);
  };
  return (
    <form
      className=" flex flex-col gap-3 items-center"
      onSubmit={(e: any) => {
        e.preventDefault();
        mutation.mutate(e);
      }}
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
}
