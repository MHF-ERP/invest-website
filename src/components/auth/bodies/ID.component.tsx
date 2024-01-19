"use client";
import Inputs from "@/components/default/inputs";
import process from "@/store/process";
import { Icon } from "@iconify/react/dist/iconify.js";
import signUpObj from "@/store/signUpObj";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import ImageUpload from "../imageUpload.component";
import requestService from "@/static/requests";
import { ID_verify } from "@/static/links";
import { useMutation } from "@tanstack/react-query";

export default function ID() {
  const { increment } = process();
  const notify = async (error: string) => toast.error(error);
  const mutation = useMutation({
    mutationFn: (e) => {
      return handel(e);
    },
  });
  const [file, setFile] = useState<File>();
  const { token, nationalId, img, updateNationalId } = signUpObj();

  return (
    <form
      className=" flex flex-col gap-3 items-center"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <div className=" flex justify-between items-center w-full">
        <label className="  shadow-lg rounded-2xl p-2 pr-8 ">
          <input type="radio" name="national" />
          <span className=" text-main text-xs font-bold">National ID</span>
        </label>
        <label className="  shadow-lg rounded-2xl p-2 pr-8 ">
          <input type="radio" name="passport" />
          <span className=" text-main tex text-xs font-bold">Passport</span>
        </label>
      </div>
      <ImageUpload setFile={setFile} />

      <Inputs
        text="National ID"
        holder="Enter your national ID"
        name="NationalId"
        value={nationalId}
        onChange={(e: any) => updateNationalId(e.target.value)}
      />
      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {mutation.isPending ? "Loading" : "Continue"}
      </button>
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();
    // get data from form
    const national = e.target.national.checked;
    const passport = e.target.passport.checked;
    const nationalId = e.target.NationalId.value;

    // national and passport Testing
    if (!national && !passport) {
      return notify("please choose NationalID or Passport");
    }
    // img Testing
    if (img.length === 0) {
      return notify("please choose an image");
    }
    // nationalId Testing
    if (nationalId.length === 0) {
      return notify("Invalid nationalId");
    }
    // handel request
    const formData = new FormData();
    formData.append("idImage", file!);
    formData.append("nationalId", nationalId);
    formData.append("idType", national ? "NATIONAL_ID" : "PASSPORT");
    const response = await requestService.post(
      ID_verify,
      token,
      true,
      formData
    );
    if (response["status"] === 200) {
      increment();
    } else if (response["status"] === 409) {
      return notify("This NationaID is already registred");
    }
  }
}
