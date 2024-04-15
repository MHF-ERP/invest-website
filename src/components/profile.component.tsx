import { useRouter } from "next/navigation";
import MyImage from "./image";

export default function Profile(props: { data: any }) {
  const router = useRouter();
  return (
    <div className=" flex gap-2 items-center">
      <MyImage
        src={props.data.image}
        alt="company Image"
        width={40}
        height={40}
        className=" rounded-lg cursor-pointer"
        defaultImage="/images/trad.jpg"
        onClick={() => router.replace("/stock/" + props.data.symbol)}
      />
      <div className=" flex flex-col">
        <span
          className="   text-[14px] font-[500]"
          style={{ color: "#171D19" }}
        >
          {props.data["companyName"]}
        </span>
        <span style={{ color: "#45564B" }} className=" text-[12px]">
          {props.data["exchange"]} ({props.data["exchangeShortName"]})
        </span>
      </div>
    </div>
  );
}
