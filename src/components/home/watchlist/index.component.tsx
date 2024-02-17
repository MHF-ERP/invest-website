import ViewAll from "../viewAll.component";
import Card from "./card.component";
import Card2 from "./card2.component";
import Title from "./title.component";

export default function WatchList(props: {
  data: any;
  title: string;
  brief: string;
}) {
  const { data, title, brief } = props;
  return (
    <div
      className=" mt-4 flex flex-col gap-[18px] p-4 border border-divider shadow rounded-xl "
      style={{ maxWidth: "25%" }}
    >
      <ViewAll title={title} brief={brief} />

      <div className=" flex flex-col gap-3">
        {data.splice(0, 5).map((item: any, idx: number) => {
          console.log(item);
          return (
            <>
              <Card2 key={idx} item={item} />
              {idx + 1 < data.length && <hr className=" border-graph" />}
            </>
          );
        })}
      </div>
    </div>
  );
}
