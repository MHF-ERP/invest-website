import Inputs from "@/components/default/inputs";
import Search from "@/components/home/main/search.component";
import PopLayout from "@/components/layouts/pop.layout";
import Header from "@/components/watchlist/popup/header.component";
import { textLength } from "@/functions/validations";
import XIcon from "@/icons/x.icon";
import { CreateWatchList } from "@/services/watchlist/createWatchList.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StockPop from "./cards.component.tsx/stock.component";
import { stocksStore } from "@/store/stocks";
import { GetSymbol } from "@/services/home/indices.service";
import { cn } from "@/lib/cn";
import SearchIcon from "@/icons/search.component";
import DeleteComponent from "@/components/home/watchlist/delete.component";
import { DeleteStock } from "@/services/home/deleteStocks";

export default function DeleteLayout(props: {
  setOverlay: any;
  id: string;
  symbol: string;
}) {
  const { id, symbol, setOverlay } = props;
  const mutation = useMutation({
    mutationFn: (e) => {
      return DeleteStock(id, symbol);
    },
    onSuccess: () => {
      setOverlay(false);
      queryClient.invalidateQueries({ queryKey: ["Watchlists"] });
      queryClient.invalidateQueries({ queryKey: ["Watchlists2"] });
    },
  });
  const { stocks } = stocksStore();

  const queryClient = useQueryClient();
  return (
    <PopLayout>
      <DeleteComponent
        id={id}
        setOverlay={setOverlay}
        title={
          stocks.filter((it: any) => it["symbol"] === symbol)[0]["companyName"]
        }
        symbol={
          stocks.filter((it: any) => it["symbol"] === symbol)[0]["symbol"]
        }
      />
    </PopLayout>
  );
}
