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

export default function CreateList(props: { setOverlay: any }) {
  const { setOverlay } = props;
  const notify = async (error: string) => toast.error(error);
  const [name, setName] = useState("");
  const mutation = useMutation({
    mutationFn: (e) => {
      return CreateWatchList(
        e,
        notify,
        getCookie("AccessToken"),
        setOverlay,
        cliked
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Watchlists"] });
      queryClient.invalidateQueries({ queryKey: ["Watchlists2"] });
    },
  });
  const { stocks, setStocks } = stocksStore();
  const [data, setData] = useState<any>();
  const [cliked, serCliked] = useState<any>([]);

  useEffect(() => {
    if (stocks) {
      setData(stocks);
    }
  }, []);
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const queryClient = useQueryClient();
  return (
    <form onSubmit={(e: any) => mutation.mutate(e)}>
      <PopLayout>
        <div className=" flex justify-between items-start h-fit">
          <Header
            title="Create Watchlist"
            brief="Create a watchlist and add the stocks you want to follow."
            headerClassName="text-xl font-semibold !leading-[28px]"
            briefClassName="text-[14px] font-[400] !leading-[20px]"
          />
          <XIcon color="#98A2B3" setOverlay={setOverlay} />
        </div>
        <div className="w-full flex flex-col mt-[20px]">
          <Inputs
            text="Name"
            name="listName"
            holder="List name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            spanClassName="text-[#344054] font-[500] leading-[20px]"
            inputClassName="border-[#D0D5DD] placeholder:text-[16px] placeholder:font-[400] w-full outline-none py-[10px]"
          />
          <span className=" text-[#475467] text-[14px] font-[400] mt-[4px]">
            {textLength(name)} Characters
          </span>
          <hr className=" mt-[14px]" />
          <div className=" mt-[14px]">
            <div
              className={cn(
                "   w-full border  border-[#D0D5DD] relative  px-2 py-2 text-sm flex gap-2 items-center rounded-md "
              )}
            >
              <SearchIcon color="#667085" />
              <input
                placeholder="Search"
                onChange={(e) => {
                  if (stocks) {
                    const help = stocks.filter((item: any) =>
                      item["companyName"].startsWith(
                        toTitleCase(e.target.value)
                      )
                    );
                    if (e.target.value === "") {
                      setData(stocks);
                    } else {
                      setData(help);
                    }
                  }
                }}
                className="placeholder:text-[16px] placeholder:font-[400] w-full outline-none"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-h-[300px] flex flex-col gap-[12px]  mt-[14px] overflow-y-auto">
          {data &&
            data.map((item: any, idx: number) => {
              return (
                <StockPop
                  key={idx}
                  item={item}
                  cliked={cliked}
                  setCliked={serCliked}
                />
              );
            })}
        </div>
        <div className=" mt-[20px] flex justify-between items-center gap-[6px]">
          <button
            type="button"
            className=" bg-white border border-[#D0D5DD] rounded-[8px] shad py-[10px] px-[16px] flex-1 "
            onClick={() => setOverlay(0)}
          >
            Cancel
          </button>
          <button
            disabled={mutation.isPending}
            type="submit"
            className=" bg-[#2E644E] text-white border border-[#D0D5DD] rounded-[8px] shad py-[10px] px-[16px] flex-1 "
          >
            {mutation.isPending ? "Loading" : "Add"}
          </button>
        </div>
      </PopLayout>
    </form>
  );
}
