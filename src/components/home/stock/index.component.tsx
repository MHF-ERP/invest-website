import GraphBox from "../main/graphBox.component";
import News from "../news/index.component";
import About from "./about.component";
import HeaderNav from "./headerNav.component";
import Recommendations from "./recommendations.component";
import StockCard from "./stockCard.component";

export default function Stock() {
  return (
    <div className=" bg-white  rounded-tl-3xl mt-4 p-6 w-full overflow-y-auto flex-1 ">
      <HeaderNav />
      <StockCard />
      <GraphBox title="Performance" stock={true} />
      <div className=" flex gap-4 mt-4  w-full xl:flex-row lg:flex-row md:flex-row flex-col ">
        <div className=" flex flex-col gap-3">
          <About />
          <Recommendations />
        </div>
        <News />
      </div>
    </div>
  );
}
