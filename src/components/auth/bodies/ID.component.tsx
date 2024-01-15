import Inputs from "@/components/default/inputs";
import process from "@/store/process";
import { Icon } from "@iconify/react/dist/iconify.js";
import signUpObj from "@/store/signUpObj";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";

export default function ID() {
  const { increment } = process();
  const notify = async (error: string) => toast.error(error);
  const [file, setFile] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState<string>("");
  const { updateImg, updateNotional, updatePassport, updateNationalId } =
    signUpObj();
  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <form className=" flex flex-col gap-3 items-center" onSubmit={handel}>
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
      <div
        onClick={() => fileInputRef.current?.click()}
        className=" w-full px-12  rounded-lg cursor-pointer border p-2 border-input flex flex-col items-center justify-center"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <div className=" w-fit   p-1 rounded-xl mb-2 border-input border">
          <Icon icon={"la:id-card"} className="  text-gray-600 text-3xl" />
        </div>
        <p className=" text-main text-xs">
          <span className=" font-bold mr-1">Click to upload</span>or drag and
          drop
        </p>
        <p className=" text-main text-xs">PNG, JPG or PDF</p>
      </div>
      <Inputs
        text="National ID"
        holder="Enter your national ID"
        name="NationalId"
      />
      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
        onClick={() => increment()}
      >
        Continue
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

    // photo Testing
    if (imagePath.length === 0) {
      return notify("Photo Required");
    }
    // nationalId Testing
    if (nationalId.length === 0) {
      return notify("Invalid nationalId");
    }

    updateNotional(national);
    updatePassport(passport);
    updateImg(imagePath);
    updateNationalId(nationalId);
  }
}
