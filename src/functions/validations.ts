import { toast } from "react-toastify";

function isEmail(text: string): boolean {
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(text);
}
export function testEmail(text: string): boolean {
  if (isEmail(text)) {
    return true;
  } else {
    return false;
  }
}
function testPasswordConstraints(password: string): string | null {
  let error: string = "";
  if (password.length < 12) {
    error += "1";
  }

  if (!/[A-Z]/.test(password)) {
    error += "2";
  }

  if (!/[!@#$%]/.test(password)) {
    error += "3";
  }
  // If all constraints are met, return null
  if (error !== "") {
    return error;
  } else {
    return null;
  }
}
function isPassword(password: string): boolean {
  if (password.length < 12) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }

  if (!/[!@#$%]/.test(password)) {
    return false;
  }
  // If all constraints are met, return null
  return true;
}
function isPhone(text: string) {
  const phoneRegex = /^[+\d\s()-]+$/;
  return phoneRegex.test(text);
}
function isCountry(text: String) {
  if (text === "Select a Country") {
    return false;
  }
  return true;
}
function validateFileExtension(fileName: string) {
  const allowedExtensions = /\/(png|jpg|jpeg|pdf)$/i;
  return (
    fileName.includes("/png") ||
    fileName.includes("/jpg") ||
    fileName.includes("/jpeg") ||
    fileName.includes("pdf")
  );
}
export function test(type: string, text: string, brief: string) {
  const notify = async (error: string) => toast.error(error);
  if (type === "Email") {
    if (text.length === 0 || !isEmail(text)) return notify(brief);
  } else if (type === "Password") {
    if (text.length === 0 || !isPassword(text)) return notify(brief);
  } else if (type === "Phone") {
    if (text.length === 0 || !isPhone(text)) return notify(brief);
  } else if (type === "Country") {
    if (text.length === 0 || !isCountry(text)) return notify(brief);
  } else if (type === "Img") {
    if (
      text.length === 0 ||
      (!validateFileExtension(text) && !text.includes("http"))
    )
      return notify(brief);
  } else {
    if (text.length === 0) return notify(brief);
  }
  return null;
}
export function testPasswword(text: string): string | null {
  const result = testPasswordConstraints(text);
  if (result) return result;
  else return null;
}
export function isPDFFile(fileName: any) {
  return fileName.includes("/pdf");
}
