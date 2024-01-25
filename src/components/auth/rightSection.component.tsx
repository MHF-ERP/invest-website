import Header from "@/components/auth/header.component";
import { useRouter } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";

export default function RightSection(props: {
  idx: number;
  body: any;
  back?: boolean;
  header: string;
  brief: string;
  func: any;
}) {
  const { body, back, idx, header, brief, func } = props;
  const router = useRouter();
  return (
    <div
      className=" xl:mt-0 lg:mt-0 md:mt-0 mt-20 flex flex-col items-center justify-center xl:gap-6 lg:gap-6 md:gap-6 gap-2"
      style={{ width: "100%" }}
    >
      <div className=" flex items-center justify-center">
        <div className="flex flex-col gap-8 bg-white w-fit p-8 rounded-lg form-shadow">
          <Header
            title={header}
            brief={brief}
            briefClassName="text-base"
            headerClassName="font-simibold text-[32px]"
          />
          {body}
        </div>
      </div>
      {back && (
        <div
          className=" flex items-center justify-center  gap-2  text-center font-bold cursor-pointer"
          onClick={() => (idx === 0 ? router.replace("/") : func())}
        >
          <IoArrowBackSharp />

          <span className=" font-bold">Back</span>
        </div>
      )}
    </div>
  );
}
