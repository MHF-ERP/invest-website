import Indices from "@/components/home/main/indices.component";
import Card from "@/components/home/main/card.component";
import WatchList from "@/components/home/watchlist/index.component";
import Daily from "@/components/home/daily";
import GraphBox from "./graphBox.component";
import WelcomeBox from "./welcomeBox.component";

export default function Home() {
  const stocksData = [
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
  ];
  return (
    <div
      className=" bg-white  rounded-tl-3xl mt-4 p-6 w-full overflow-y-auto flex-1 "
      // style={{ width: `calc(100vw - 240px)` }}
    >
      <WelcomeBox />
      <Indices />

      <div className=" flex gap-4 overflow-scroll w-full cat  cursor-grab mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <GraphBox title={"Sales Report"} stock={false} />
      <div className=" flex gap-4  w-full mt-4 xl:flex-row lg:flex-row md:flex-row flex-col">
        <WatchList data={stocksData} title="Most traded stocks" />
        <Daily />
      </div>
    </div>
  );
}
