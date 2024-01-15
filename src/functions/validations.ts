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
export function testPasswword(text: string): string | null {
  const result = testPasswordConstraints(text);
  if (result) return result;
  else return null;
}
