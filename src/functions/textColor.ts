export default function TextColor(text: string) {
  if (text === "+") {
    return "text-success";
  } else if (text === "-") {
    return "text-decrease";
  }
  return "text-main2";
}
