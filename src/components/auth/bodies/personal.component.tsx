"use client";
import DropDown from "@/components/default/dropdown";
import Inputs from "@/components/default/inputs";
import process from "@/store/process";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import "react-phone-input-2/lib/style.css"; // Import the CSS file
import requestService from "@/static/requests";
import { PERSONAL } from "@/static/links";
import signUpObj from "@/store/signUpObj";
import { test } from "@/functions/validations";

export default function Personal() {
  const {
    token,
    firstName,
    lastName,
    phone,
    city,
    country,
    updatePhone,
    updateCity,
    updateCountry,
    updateFirstName,
    updateLastName,
  } = signUpObj();
  const { increment } = process();
  const notify = async (error: string) => toast.error(error);
  const mutation = useMutation({
    mutationFn: (e) => {
      return handel(e);
    },
  });

  return (
    <form
      className=" flex flex-col gap-3"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <div className=" w-full flex gap-2">
        <Inputs
          holder="First name"
          text="First Name"
          name="firstName"
          value={firstName.length > 0 ? firstName : ""}
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
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const city = e.target.city.value;

    // **************Test******************
    if (
      test("any", firstName, "The first name provided is invalid") ||
      test("any", lastName, "The last name provided is invalid") ||
      test("Phone", phone, "The phone number provided is invalid") ||
      test("Country", country, "Please select your country") ||
      test("any", city, "The city provided is invalid")
    ) {
      return;
    }
    // **************Handel Request******************
    const requestJson = JSON.stringify({
      name: firstName + " " + lastName,
      phone,
      country,
      city,
    });
    // **************Send Request******************
    const response = await requestService.post(
      PERSONAL,
      token,
      false,
      requestJson
    );
    if (response["status"] === 200) {
      updateFirstName(firstName);
      updateLastName(lastName);
      updateCity(city);
      increment();
    }
  }
}
