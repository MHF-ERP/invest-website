import { test } from "@/functions/validations";
import { PERSONAL } from "@/static/links";
import requestService from "@/static/requests";

export async function personalSerives(
  e: any,
  phone: string,
  country: string,
  city: string,
  token: string,
  updateFirstName: any,
  updateLastName: any,
  updateCity: any,
  increment: any
) {
  e.preventDefault();
  const firstName = e.target.firstName.value;
  const lastName = e.target.lastName.value;

  // **************Test******************
  if (
    test("any", firstName, "The first name provided is invalid") ||
    test("any", lastName, "The last name provided is invalid") ||
    test("name", firstName, "The first name mustn’t contain spaces") ||
    test("name", lastName, "The first name mustn’t contain spaces") ||
    test("Phone", phone, "The phone number provided is invalid") ||
    test("Country", country, "Please select your country") ||
    test("City", city, "Please select your city")
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
  await request(
    requestJson,
    firstName,
    lastName,
    city,
    token,
    updateFirstName,
    updateLastName,
    updateCity,
    increment
  );
}
async function request(
  requestJson: string,
  firstName: string,
  lastName: string,
  city: string,
  token: string,
  updateFirstName: any,
  updateLastName: any,
  updateCity: any,
  increment: any
) {
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
