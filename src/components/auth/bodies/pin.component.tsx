import Inputs from "@/components/default/inputs";
import useStore from "@/store";

export default function Pin() {
  const { increment } = useStore();

  return (
    <form className=" flex flex-col gap-3 items-center">
      <Inputs text="Setup PIN" holder="Enter your PIN" />
      <button
        onClick={() => increment()}
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        Finish
      </button>
    </form>
  );
}
// react-verification-input
