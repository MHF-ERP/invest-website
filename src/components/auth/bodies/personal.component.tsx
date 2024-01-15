import DropDown from "@/components/default/dropdown";
import Inputs from "@/components/default/inputs";
import useStore from "@/store";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the CSS file

export default function Personal() {
  const [value, setValue] = useState("1");
  const { increment } = useStore();

  return (
    <form className=" flex flex-col gap-3">
      <div className=" w-full flex gap-2">
        <Inputs holder="First name" text="First Name" />
        <Inputs holder="Last name" text="Last Name" />
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
      <Inputs text="City" holder="Enter your city" />
      <button
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
        onClick={() => increment()}
      >
        Continue
      </button>
    </form>
  );
}
