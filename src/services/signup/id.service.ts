import { test } from "@/functions/validations";
import { ID_verify, ID_verify_WithoutImg } from "@/static/links";
import requestService from "@/static/requests";
import { signUpObj } from "@/store/signUpObj";
import { process } from "@/store/process";

import { toast } from "react-toastify";
import { GetWatchLists } from "../watchlist/getWatchLists.service";

export async function idServises(
  e: any,
  img: any,
  file: any,
  token: string,
  increment: any
) {
  e.preventDefault();

  // **************Get data from form******************
  const national = e.target.national.checked;
  const passport = e.target.passport.checked;
  const nationalId = e.target.NationalId.value;
  // **************National And Passport Testing******************
  const notify = async (error: string) => toast.error(error);

  if (!national && !passport) {
    return notify("Please select either National ID or Passport");
  }
  // **************Test******************
  if (
    test("Img", img, "Please select a valid image") ||
    test("any", nationalId, "The NationalID provided is invalid")
  ) {
    return;
  }

  // **************handel Request if we want to upload file******************
  const formData = new FormData();
  let response;
  if (file) {
    formData.append("idImage", file!);
    formData.append("nationalId", nationalId);
    formData.append("idType", national ? "NATIONAL_ID" : "PASSPORT");
    response = await requestService.post(ID_verify, token, true, formData);
  }
  // **************handel Request if we donot want to upload file******************
  else {
    const requestJson = JSON.stringify({
      nationalId,
      idType: national ? "NATIONAL_ID" : "PASSPORT",
    });
    response = await requestService.post(
      ID_verify_WithoutImg,
      token,
      false,
      requestJson
    );
  }

  if (response["status"] === 200) {
    increment();
  } else if (response["status"] === 409) {
    return notify("This NationaID is already registred");
  }
}
