import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import VerificationInput from "react-verification-input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { pinService } from "@/services/signup/pin.service";
import { signUpObj } from "@/store/signUpObj";
export default function Pin() {
  const [code, setCode] = useState("");

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (e) =>
      pinService(
        e,
        code,
        router,
        token,
        updateCity,
        updateCountry,
        updateEmail,
        updatePhone,
        updateLastName,
        updateImg,
        updateNationalId,
        updateToken,
        updateFirstName
      ),
  });

  const handleVerificationChange = (value: string) => {
    setCode(value);
  };
  const {
    token,
    updateCity,
    updateCountry,
    updateEmail,
    updatePhone,
    updateLastName,
    updateImg,
    updateNationalId,
    updateToken,
    updateFirstName,
  } = signUpObj();
  return (
    <form
      className="flex flex-col gap-3 items-center form-shadow"
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
        type="submit"
        className="bg-main2 py-2 hover:shadow-md text-white rounded-md w-full mt-4"
      >
        {mutation.isPending ? "Loading" : "Finish"}
      </button>
      <ToastContainer />
    </form>
  );
}
