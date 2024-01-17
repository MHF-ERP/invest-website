"use client";
import Indices from "@/components/home/indices.component";
import Navigator from "@/components/home/navigator.component";
import Search from "@/components/home/search.component";
import Welcome from "@/components/home/welcome.component";
import { NextPage } from "next";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
} from "chart.js";
import TradingComponent from "@/components/trading.component";
import userStore from "@/store/user";
import { useEffect } from "react";
import { NextPageContext } from "next";

const Page: NextPage = (req, res) => {
  return (
    <main className=" bg-main flex  h-screen w-screen">
      <Navigator current={1} />
      <div className=" flex-1 bg-white rounded-tl-3xl mt-4 p-6">
        <div className=" flex justify-between items-center">
          <Welcome />
          <Search />
        </div>
        <Indices />
        <TradingComponent />
        {/* <MyChart /> */}
      </div>
    </main>
  );
};

export default Page;
