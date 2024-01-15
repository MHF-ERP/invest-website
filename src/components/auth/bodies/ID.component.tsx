import Inputs from "@/components/default/inputs";
import useStore from "@/store";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ID() {
  const { increment } = useStore();

  return (
    <form className=" flex flex-col gap-3 items-center">
      <div className=" flex justify-between items-center w-full">
        <label className="  shadow-lg rounded-2xl p-2 pr-8 ">
          <input type="radio" name="radio" />
          <span className=" text-main text-xs font-bold">National ID</span>
        </label>
        <label className="  shadow-lg rounded-2xl p-2 pr-8 ">
          <input type="radio" name="radio" />
          <span className=" text-main text-xs font-bold">Passport</span>
        </label>
      </div>
      <div className=" w-full px-12  rounded-lg cursor-pointer border p-2 border-input flex flex-col items-center justify-center">
        <div className=" w-fit   p-1 rounded-xl mb-2 border-input border">
          <Icon icon={"la:id-card"} className="  text-gray-600 text-3xl" />
        </div>
        <p className=" text-main text-xs">
          <span className=" font-bold mr-1">Click to upload</span>or drag and
          drop
        </p>
        <p className=" text-main text-xs">PNG, JPG or PDF</p>
      </div>
      <Inputs text="National ID" holder="Enter your national ID" />
      <button
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
        onClick={() => increment()}
      >
        Continue
      </button>
    </form>
  );
}
