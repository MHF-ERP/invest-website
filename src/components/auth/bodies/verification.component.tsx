import verificationServices from "@/services/signup/verification,service";
import forgetStore from "@/store/forget";
import { signUpObj } from "@/store/signUpObj";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerificationInput from "react-verification-input";

export default function Verification(props: { inc: any; isNew?: boolean }) {
  const [code, setCode] = useState<string>("");
  const { token } = signUpObj();
  const { email } = forgetStore();
  const { inc } = props;
  const mutation = useMutation({
    mutationFn: (e) => {
      return verificationServices(e, code, inc, token, props.isNew, email);
    },
  });
  const handleVerificationChange = (value: string) => {
    setCode(value);
  };
  return (
    <form
      className=" flex flex-col gap-3 items-center form-shadow"
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
