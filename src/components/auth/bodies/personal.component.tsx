import DropDown from "@/components/default/dropdown";
import Inputs from "@/components/default/inputs";
import process from "@/store/process";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from "react-toastify";

import "react-phone-input-2/lib/style.css"; // Import the CSS file
import signUpObj from "@/store/signUpObj";

export default function Personal() {
  const [value, setValue] = useState("");
  const { increment } = process();
  const notify = async (error: string) => toast.error(error);
  const { updateFirstName, updateLastName, updatePhone, updateCity } =
    signUpObj();

  return (
    <form className=" flex flex-col gap-3" onSubmit={handel}>
      <div className=" w-full flex gap-2">
        <Inputs holder="First name" text="First Name" name="firstName" />
        <Inputs holder="Last name" text="Last Name" name="lastName" />
      </div>
      <div className=" flex flex-col gap-1">
        <span className="  text-textInput text-sm">Phone Number</span>

        <PhoneInput
          disableSearchIcon
          enableSearch={true}
          country={"eg"}
          value={value}
          onChange={(phone) => setValue(phone)}
        />
      </div>
      <DropDown text="Country" />
      <Inputs text="City" holder="Enter your city" name="city" />
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
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phone = value;
    const city = e.target.city.value;

    // firstName Testing
    if (firstName.length === 0) {
      return notify("Invalid First Name");
    }
    // lastName Testing
    if (lastName.length === 0) {
      return notify("Invalid Last Name");
    }
    // phone Testing
    if (phone.length === 0) {
      return notify("Invalid Phone number");
    }
    // city Testing
    if (city.length === 0) {
      return notify("Invalid city");
    }

    updateFirstName(firstName);
    updateLastName(lastName);
    updatePhone(phone);
    updateCity(city);
  }
}
