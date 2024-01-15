import Inputs from "@/components/default/inputs";
import process from "@/store/process";
import signUpObj from "@/store/signUpObj";
import { ToastContainer, toast } from "react-toastify";
export default function Pin() {
  const { increment } = process();
  const notify = async (error: string) => toast.error(error);
  const { updatePin } = signUpObj();
  return (
    <form className=" flex flex-col gap-3 items-center" onSubmit={handel}>
      <Inputs text="Setup PIN" holder="Enter your PIN" name="pin" />
      <button
        type="submit"
        onClick={() => increment()}
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        Finish
      </button>
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();
    // get data from form
    const pin = e.target.pin.value;

    // pin Testing
    if (pin.length === 0) {
      return notify("please provide 4 digit pin");
    }

    updatePin(pin);
  }
}
// react-verification-input
