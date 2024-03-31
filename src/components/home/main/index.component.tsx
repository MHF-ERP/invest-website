import Indices from "@/components/home/main/indices.component";
import Card from "@/components/home/main/card.component";
import WatchList from "@/components/home/watchlist/index.component";
import Daily from "@/components/home/daily";
import GraphBox from "./graphBox.component";
import WelcomeBox from "./welcomeBox.component";
import HomeLayout from "@/components/layouts/home.layout";
import Apex from "@/components/apex.component";
import { useQuery } from "@tanstack/react-query";
import { GetSymbol } from "@/services/home/indices.service";
import { STOCKS_DATA } from "@/static/stocks";
import { useEffect, useState } from "react";
import { stocksStore } from "@/store/stocks";
import { PREDECT } from "@/static/links";
import ContentLoader from "react-content-loader";
import LoadingAi from "../collection/loadingAi";

export default function DefHome() {
  const { stocks, setStocks } = stocksStore();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["indices"],
    queryFn: () => GetSymbol(setStocks),

    enabled: false,
  });

  const [DataUp, setDataUp] = useState<any>();
  const [DataDown, setDataDown] = useState<any>();

  async function getData() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    await fetch(proxyUrl + PREDECT)
      .then((response) => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then((data) => {
        const dataArray = Object.keys(data["predictions"]).map((key) => ({
          id: key,
          prediction: data["predictions"][key].prediction,
          probability: (data["predictions"][key].probability * 100).toFixed(),
        }));
        // Do something with the JSON data
        const Up = dataArray.filter((item) => item.prediction === "Up");
        const Down = dataArray.filter((item) => item.prediction === "Down");

        Up.sort(
          (a, b) => parseFloat(b.probability) - parseFloat(a.probability)
        );
        Down.sort(
          (a, b) => parseFloat(a.probability) - parseFloat(b.probability)
        );
        setDataUp(Up);
        setDataDown(Down);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }
  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomeLayout>
      <WelcomeBox />
      {DataUp && DataUp.length > 0 && (
        <GraphBox title={"Sales Report"} stock={false} id="" data={DataUp} />
      )}
      {!DataUp && <LoadingAi up={true} />}
      {!DataUp && <LoadingAi up={false} />}

      {DataDown && DataDown.length > 0 && (
        <GraphBox title={"Sales Report"} stock={false} id="" data={DataDown} />
      )}
      <div className=" flex gap-4  w-full  xl:flex-row lg:flex-row flex-col">
        {!isLoading && stocks && <Daily />}
        {!isLoading && stocks && (
          <WatchList
            data={stocks}
            title="Top Turnover"
            brief="Most traded stocks"
          />
        )}
      </div>
    </HomeLayout>
  );
}
