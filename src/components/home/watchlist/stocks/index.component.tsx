import WatchStore from "@/store/watchlist";
import Card from "./card.component";
import { GetHistorical } from "@/services/home/getHistorical";

export default function Stocks() {
  const { data, tap } = WatchStore();

  return (
    <div className=" flex gap-7 mt-4 flex-wrap items-start">
      {data[tap].Stocks.length > 0
        ? data[tap].Stocks.map((item: any, idx: number) => {
            return <Card item={item.symbol} key={idx} text={"+2.33"} />;
          })
        : "There is no stocks"}
    </div>
  );
}
