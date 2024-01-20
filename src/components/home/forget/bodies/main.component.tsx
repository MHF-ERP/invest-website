import Inputs from "@/components/default/inputs";
import forgetStore from "@/store/forget";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

export default function Forget() {
  const notify = async (error: string) => toast.error(error);
  // const mutation = useMutation({
  //   mutationFn: (e) => {
  //     return handel(e);
  //   },
  // });
  const { email, count, increment, updateEmail } = forgetStore();
  return (
    <form
      className=" flex flex-col gap-3 items-center"
      // onSubmit={(e: any) => mutation.mutate(e)}
    >
      <Inputs
        text="Email"
        holder="Enter your email"
        name="forgetEmail"
        value={email}
        onChange={(e: any) => updateEmail(e.target.value)}
      />{" "}
      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {/* {mutation.isPending ? "Loading" : "Continue"} */}
        Continue
      </button>
      <ToastContainer />
    </form>
  );
}
