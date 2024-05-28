"use client";
import Inputs from "@/components/default/inputs";
import { processStatus } from "@/functions/processStatus";
import { isPassword, test } from "@/functions/validations";
import { LOGIN, MEDIA } from "@/static/links";
import requestService from "@/static/requests";
import forgetStore from "@/store/forget";
import { process } from "@/store/process";
import { signUpObj } from "@/store/signUpObj";
import userStore from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Remember from "./remember.component";
import { setCookie } from "cookies-next";
import resendVerificationServices from "@/services/signup/resend.service";

export default function Body() {
  const { setCount: setCountProcess } = process();
  const { setCount: setCountForget } = forgetStore();
  useEffect(() => {
    setCountProcess(0);
    setCountForget(0);
  }, []);
  const router = useRouter();
  const notify = async (error: string) => toast.error(error);
  const mutation = useMutation({
    mutationFn: (e) => {
      return handelForm(e);
    },
  });
  const {
    updateEmail,
    updateToken,
    updateFirstName,
    updateLastName,
    updatePhone,
    updateCountry,
    updateCity,
    updateImg,
    updateNationalId,
  } = signUpObj();
  const { setName } = userStore();
  return (
    <>
      <form
        className="flex flex-col gap-[20px]"
        onSubmit={(e: any) => mutation.mutate(e)}
      >
        <Inputs
          holder="Enter your email"
          text="Email"
          name="LoginEmail"
          inputClassName="placeholder:text-base text-base"
          spanClassName="font-medium"
        />
        <div className="flex flex-col gap-4">
          <Inputs
            holder="*************"
            text="Password"
            name="LoginPassword"
            inputClassName="placeholder:text-base text-base"
            spanClassName="font-medium"
          />
        </div>
        <button
          disabled={mutation.isPending}
          type="submit"
          className=" bg-main2 px-[10px] py-4 hover:shadow-md text-white rounded-md w-full mb-4 font-semibold"
        >
          {mutation.isPending ? "Loading" : "Sign in"}
        </button>
      </form>
    </>
  );
  async function handelForm(e: any) {
    e.preventDefault();
    //************* Get Data From Form*************** */
    const email = e.target.LoginEmail.value;
    const password = e.target.LoginPassword.value;
    // **************Test******************
    if (
      test("Email", email, "The email entered is invalid") ||
      test("Password", password, "The password field is required")
    ) {
      return;
    }
    if (!isPassword(password))
      return notify("The email or password provided is incorrect.");
    // **************Handel Request******************
    const requestJson = JSON.stringify({
      email,
      password,
      fcm: "user",
      socketId: "user",
    });
    // **************Send Request******************
    const response = await requestService.post(
      LOGIN,
      undefined,
      false,
      requestJson
    );
    // **************handel Response******************

    handelResponse(response["status"], response["data"]);
  }

  function handelResponse(status: number, data: any) {
    // **************Invalid Credintial******************
    if (status === 422) {
      return notify("The email or password provided is incorrect");
    }
    // **************Valid Credintial and User not Active******************
    else if (status === 200) {
      if (data["data"]["status"] !== "ACTIVE") {
        setCountProcess(processStatus(data["data"]["status"])!);

        if (processStatus(data["data"]["status"]) === 1)
          resendVerificationServices(data["data"]["email"]);
        updateEmail(data["data"]["email"]);
        updateToken(data["token"]);
        updateFirstName(data["data"]["name"]?.split(" ")?.at(0));
        updateLastName(data["data"]["name"]?.split(" ")?.pop());
        updatePhone(data["data"]["phone"]);
        updateCountry(
          data["data"]["country"] === null
            ? "Select a Country"
            : data["data"]["country"]
        );
        updateCity(
          data["data"]["city"] === null ? "Select a City" : data["data"]["city"]
        );
        updateImg(
          data["data"]["idImage"] ? MEDIA + data["data"]["idImage"] : ""
        );
        updateNationalId(data["data"]["nationalId"]);
        router.replace("/signup");
      }
      // **************Valid Credintial and User Active******************
      else {
        setName(data["data"]["name"]);
        const farFutureDate = new Date(2030, 11, 31); // Month is 0-based, so 11 represents December
        // console.log(farFutureDate);
        setCookie("AccessToken", data["token"], { expires: farFutureDate });

        // document.cookie = `AccessToken=${data["token"]}; path=/`;
        router.replace("/home");
      }
    }
  }
}
