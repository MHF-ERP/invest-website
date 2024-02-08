import DropDown from "@/components/default/dropdown";
import Inputs from "@/components/default/inputs";
import { process } from "@/store/process";
import { signUpObj } from "@/store/signUpObj";
import { useMutation } from "@tanstack/react-query";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { personalSerives } from "@/services/signup/personal.service";

export default function Personal() {
  const { token, updateFirstName, updateLastName, updateCity } = signUpObj();
  const { increment } = process();
  const {
    firstName,
    lastName,
    phone,
    city,
    country,
    updatePhone,
    updateCountry,
  } = signUpObj();
  const mutation = useMutation({
    mutationFn: (e) => {
      return personalSerives(
        e,
        phone,
        country,
        token,
        updateFirstName,
        updateLastName,
        updateCity,
        increment
      );
    },
  });

  return (
    <form
      className=" flex flex-col gap-3"
      onSubmit={(e: any) => {
        e.preventDefault();
        mutation.mutate(e);
      }}
    >
      <div className=" w-full flex gap-2">
        <Inputs
          holder="First name"
          text="First Name"
          name="firstName"
          value={firstName?.length > 0 ? firstName : ""}
        />
        <Inputs
          holder="Last name"
          text="Last Name"
          name="lastName"
          value={lastName}
        />
      </div>
      <div className=" flex flex-col gap-1">
        <span className="  text-textInput text-sm">Phone Number</span>

        <PhoneInput
          disableSearchIcon
          enableSearch={true}
          country={"eg"}
          value={phone}
          onChange={(phone) => updatePhone(phone)}
        />
      </div>
      <DropDown
        text="Country"
        selectedValue={country}
        setSelectedValue={updateCountry}
      />
      <Inputs text="City" holder="Enter your city" name="city" value={city} />
      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {mutation.isPending ? "Loading" : "Continue"}
      </button>
    </form>
  );
}
