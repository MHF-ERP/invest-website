import IconButton from "@/components/default/iconButton.component";
import Garph from "@/components/graph.component";
import Navigator from "@/components/home/navigator/navigator.component";
import Stocks from "@/components/home/watchlist/stocks/index.component";
import AllPageLayout from "@/layouts/allPage.layout";
import HomeLayout from "@/layouts/home.layout";
import Changes from "@/components/watchlist/changes.component";
import Header from "@/components/watchlist/header.component";
import StockTable from "@/components/watchlist/stocksTable/index.component";
import Actions from "@/components/watchlist/taps/actions.component";
import Taps from "@/components/watchlist/taps/taps.component";
import React from "react";
import { IoFilter } from "react-icons/io5";

export default function page() {
  return (
    <AllPageLayout>
      <Navigator current={2} />

      <HomeLayout>
        <Header />
        <hr className="my-4" />
        <div className=" flex justify-between items-center">
          <Taps />
          <div className=" flex gap-4">
            <Actions />
            <IconButton
              bgColor="#FFFFFF"
              color="#26312A"
              icon={<IoFilter className=" text-taps" />}
              left={false}
              text="Filters"
            />
          </div>
        </div>
        <Changes />
      </HomeLayout>
    </AllPageLayout>
  );
}
