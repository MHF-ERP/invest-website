import forgetStore from "@/store/forget";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
  const { updateEmail } = forgetStore();
  return (
    <div className=" w-full">
      <button
        onClick={() => {
          updateEmail("");
          router.replace("/");
        }}
        className="bg-main2 py-2  hover:shadow-md text-white rounded-md w-full "
      >
        Continue
      </button>
    </div>
  );
}
