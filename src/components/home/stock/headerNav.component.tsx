import { RiHome6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

export default function HeaderNav() {
  return (
    <div className=" w-full flex gap-4 items-center">
      <RiHome6Line className=" text-input text-xl" />
      <IoIosArrowForward className=" text-input" />
      <span className=" text-p  font-semibold">Home</span>
      <IoIosArrowForward className=" text-input" />
      <span className=" text-p font-semibold">NVIDIA Corp</span>
    </div>
  );
}
