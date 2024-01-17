export function processStatus(type: string) {
  if (type === "EMAIL_VERIFICATION") {
    return 1;
  } else if (type === "WAITING_DETAILS") {
    return 2;
  } else if (type === "ID_VERIFICATION") {
    return 3;
  } else if (type === "PIN_SETUP") {
    return 4;
  }
}
