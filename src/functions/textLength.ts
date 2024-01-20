export function chexkLength(text: string, length: number) {
  if (text.length > length) {
    return text.slice(0, length - 3) + "..";
  } else return text;
}
