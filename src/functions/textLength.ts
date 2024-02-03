export function chexkLength(text: any, length: number) {
  if (text.length > length) {
    return text.slice(0, length - 3) + "..";
  } else return text;
}
