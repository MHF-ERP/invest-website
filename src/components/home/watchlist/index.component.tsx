import { stocksStore } from "@/store/stocks";
import ViewAll from "../viewAll.component";
import Card from "./card.component";
import Card2 from "./card2.component";
import Title from "./title.component";

export default function WatchList(props: {
  data: any;
  title: string;
  brief: string;
}) {
  const { title, brief } = props;
  const { stocks } = stocksStore();
  return (
    <div className="  flex flex-col h-full gap-[18px] xl:max-w-[25%] lg:max-w-[25%] w-[100%] p-4 border border-divider shadow rounded-xl ">
      <ViewAll title={title} brief={brief} />

      <div className=" flex flex-col gap-3">
        {stocks.slice(0, 5).map((item: any, idx: number) => {
          return (
            <>
              <Card2 key={idx} item={item} />
              {idx + 1 < stocks.length && <hr className=" border-graph" />}
            </>
          );
        })}
      </div>
    </div>
  );
}
