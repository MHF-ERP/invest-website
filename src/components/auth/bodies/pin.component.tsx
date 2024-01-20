"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import VerificationInput from "react-verification-input";
import { useMutation } from "@tanstack/react-query";
import requestService from "@/static/requests";
import { PIN } from "@/static/links";
import signUpObj from "@/store/signUpObj";
import process from "@/store/process";

import { useRouter } from "next/navigation";

export default function Pin() {
  const [code, setCode] = useState("");
  const {
    token,
    updatePhone,
    updateCity,
    updateCountry,
    updateEmail,
    updateFirstName,
    updateLastName,
    updateImg,
    updateNationalId,
    updateToken,
  } = signUpObj();
  const { setCount } = process();

  const notify = (error: string) => toast.error(error);

  const mutation = useMutation({
    mutationFn: (e) => handel(e),
  });

  const handleVerificationChange = (value: string) => {
    setCode(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    mutation.mutate(e);
  };
  const router = useRouter();

  async function handel(e: any) {
    // pin Testing
    if (code.length < 4) {
      return notify("Please provide a 4-digit pin");
    }

    // handle request
    const requestJson = JSON.stringify({
      pinCode: code,
    });

    // send Request
    try {
      const response = await requestService.post(
        PIN,
        token,
        false,
        requestJson
      );

      if (response.status === 200) {
        updateCity("");
        updateCountry("Select a Country");
        updateEmail("");
        updatePhone("");
        updateLastName("");
        updateImg("");
        updateNationalId("");
        updateToken("");
        updateFirstName("");
        router.replace("/");
        setCount(0);
      }
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
      notify("An error occurred");
    }
  }

  return (
    <form className="flex flex-col gap-3 items-center" onSubmit={handleSubmit}>
      <VerificationInput
        autoFocus
        placeholder=""
        length={4}
        validChars="0-9"
        onChange={handleVerificationChange}
      />
      <button
        type="submit"
        className="bg-main2 py-2 hover:shadow-md text-white rounded-md w-full mt-4"
      >
        {mutation.isPending ? "Loading" : "Finish"}
      </button>
      <ToastContainer />
    </form>
  );
}
