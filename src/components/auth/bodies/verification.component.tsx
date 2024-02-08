import resendVerificationServices from "@/services/signup/resend.service";
import verificationServices from "@/services/signup/verification,service";
import { FORGET } from "@/static/links";
import requestService from "@/static/requests";
import forgetStore from "@/store/forget";
import { signUpObj } from "@/store/signUpObj";
import { useMutation } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import VerificationInput from "react-verification-input";

export default function Verification(props: { inc: any; isNew?: boolean }) {
  const path = usePathname();
  const [code, setCode] = useState<string>("");
  const [seconds, setSeconds] = useState(30);
  const { token } = signUpObj();
  const { email: forgotEmail } = forgetStore();
  const { email: signUpEmail } = signUpObj();

  const email = path !== "/signup" ? forgotEmail : signUpEmail;

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const disabled = seconds > 0;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const { inc } = props;
  const resend = useMutation({
    mutationFn: (): any => {
      if (signUpEmail) return resendVerificationServices(email);
      return requestService.post(FORGET, undefined, false, { email });
    },
  });

  const verify = useMutation({
    mutationFn: (e) => {
      return verificationServices(e, code, inc, token, props.isNew, email);
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
        verify.mutate(e);
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
        disabled={verify.isPending}
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {verify.isPending ? "Loading" : "Verify"}
      </button>
      {
        <p className=" text-p flex gap-2">
          Didn’t receive the OTP?!{" "}
          <button
            type="button"
            disabled={disabled}
            onClick={() => {
              resend.mutate(), setSeconds(120);
            }}
            className=" text-headerWatch font-bold hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:no-underline"
          >
            {!disabled ? "Click to resend" : formatTime(seconds)}
          </button>
        </p>
      }
    </form>
  );
}
