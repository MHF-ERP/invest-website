import forgetStore from "@/store/forget";
import { useRouter } from "next/navigation";
import React from "react";

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
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        Continue
      </button>
    </div>
  );
}
