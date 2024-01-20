import Home from "@/components/home/main/index.component";
import Navigator from "@/components/home/navigator/navigator.component";
import Stock from "@/components/home/stock/index.component";
import { NextPage } from "next";

const Page: NextPage = (req, res) => {
  return (
    <main className=" bg-main flex  h-screen max-w-screen">
      <Navigator current={1} />
      <Stock />
      {/* <Home /> */}
    </main>
  );
};

export default Page;
