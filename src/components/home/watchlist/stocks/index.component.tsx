import WatchStore from "@/store/watchlist";
import Card from "./card.component";
import { GetHistorical } from "@/services/home/getHistorical";
import Image from "next/image";

export default function Stocks(props: {
  setWatchlistId: any;
  setOverlay: any;
  setSymbol: any;
}) {
  const { data, tap } = WatchStore();
  const { setWatchlistId, setOverlay, setSymbol } = props;
  return (
    <div className=" w-full h-full flex gap-7 mt-4 flex-wrap items-start">
      {data[tap].Stocks.length > 0 ? (
        data[tap].Stocks.map((item: any, idx: number) => {
          return (
            <Card
              id={data[tap]["id"]}
              setWatchlistId={setWatchlistId}
              setOverlay={setOverlay}
              setSymbol={setSymbol}
              item={item.symbol}
              key={idx}
              text={"+2.33"}
            />
          );
        })
      ) : (
        <div className=" w-full h-full  flex items-center justify-center">
          <div className=" w-fit h-fit flex flex-col items-center justify-center">
            <Image
              width={100}
              height={100}
              alt={"empty"}
              src={"/images/empty.png"}
            />
            <h1 className=" text-[#0B0E0C] font-[600] text-[20px]">
              No Stocks yet
            </h1>
            <p className=" text-[#45564B] font-[400] text-[16px]">
              Begin choosing the stocks you want to keep an eye on.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
