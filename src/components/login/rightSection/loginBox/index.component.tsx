import Link from "next/link";
import Header from "../../../auth/header.component";
import Body from "./body.component";

export default function LoginBox() {
  return (
    <>
      <div className="flex gap-8 flex-col bg-white px-6 py-8 rounded-lg md:w-[30vw] h-fit form-shadow text-xlg font-">
        <Header
          title={"Log in"}
          brief={"Welcome back! Please enter your details."}
          briefClassName="text-base"
          headerClassName="font-simibold text-[32px]"
        />
        <Body />
        <div className=" flex items-center justify-center gap-1">
          <span className="text-placeholer text-sm  text-center">
            Don’t have an account?{" "}
          </span>
          <Link
            className="text-main text-sm font-semibold hover:underline "
            href={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
