import PopLayout from "@/components/layouts/pop.layout";
import Header from "@/components/watchlist/popup/header.component";
import XIcon from "@/icons/x.icon";
import WatchStore from "@/store/watchlist";
import { useRef } from "react";
import Add from "./cards.component.tsx/add.component";

export default function DeleteList(props: { setOverlay: any }) {
  const { setOverlay } = props;
  const { data } = WatchStore();
  const ref = useRef<any>();
  return (
    <PopLayout>
      <div className=" flex justify-between items-start">
        <Header
          title="My Watchlists"
          brief="Organize and edit your watchlists."
          headerClassName="text-xl font-semibold !leading-[28px]"
          briefClassName="text-[14px] font-[400] !leading-[20px]"
        />
        <XIcon color="#98A2B3" setOverlay={setOverlay} />
      </div>
      <div className="w-full h-[400px] mt-20px flex flex-col gap-[12px]   mt-[20px] overflow-y-auto ">
        {data.map((item: any, idx: number) => {
          return (
            <Add
              id={item.id}
              key={idx}
              without
              title={item.name}
              length={item.Stocks ? item.Stocks.length : 0}
              setOverlay={setOverlay}
            />
          );
        })}
      </div>
    </PopLayout>
  );
}
