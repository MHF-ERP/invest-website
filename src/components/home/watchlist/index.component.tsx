import Card from "./card.component";
import Title from "./title.component";

export default function WatchList(props: { data: any; title: string }) {
  const { data, title } = props;
  return (
    <div
      className=" flex flex-col gap-2 p-4 border border-graph shadow rounded-xl h-fit"
      style={{ minWidth: "30%" }}
    >
      <Title title={title} />
      {data.map(
        (
          item: {
            img: string;
            title: string;
            brief: string;
            value: string;
            change: string;
          },
          idx: number
        ) => {
          return (
            <>
              <Card key={idx} item={item} />
              {idx + 1 < data.length && <hr className=" border-graph" />}
            </>
          );
        }
      )}
    </div>
  );
}
