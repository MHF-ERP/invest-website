import Collection from "../collection/index.component";
import Ai from "../ai/index.component";
import Score from "../stock/score.component";
import Statics from "../stock/statics.component";
import BodyOfGraphBox from "../stock/bodyOfGraphbox.component";

export default function GraphBox(props: { title: string; stock: boolean }) {
  const { stock } = props;
  return (
    <div className=" mt-8 flex gap-4  w-full xl:flex-row lg:flex-row md:flex-row flex-col ">
      {!stock && (
        <>
          <Collection />
          <Ai />
        </>
      )}

      {stock && <BodyOfGraphBox />}
    </div>
  );
}
