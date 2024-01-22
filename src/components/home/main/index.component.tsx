import Indices from "@/components/home/main/indices.component";
import Card from "@/components/home/main/card.component";
import WatchList from "@/components/home/watchlist/index.component";
import Daily from "@/components/home/daily";
import GraphBox from "./graphBox.component";
import WelcomeBox from "./welcomeBox.component";
import HomeLayout from "@/layouts/home.layout";

export default function DefHome() {
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
    <HomeLayout>
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
    </HomeLayout>
  );
}
