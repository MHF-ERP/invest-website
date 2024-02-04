import PopLayout from "@/components/layouts/pop.layout";
import React, { useState } from "react";
import Header from "@/components/watchlist/popup/header.component";
import XIcon from "@/icons/x.icon";
import Inputs from "@/components/default/inputs";
import Search from "@/components/home/main/search.component";
import StockPop from "./cards.component.tsx/stock.component";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateWatchList } from "@/services/watchlist/createWatchList.service";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import { textLength } from "@/functions/validations";

export default function CreateList(props: { setOverlay: any }) {
  const { setOverlay } = props;
  const notify = async (error: string) => toast.error(error);
  const [name, setName] = useState("");
  const mutation = useMutation({
    mutationFn: (e) => {
      return CreateWatchList(e, notify, getCookie("AccessToken"), setOverlay);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Watchlists"] });
    },
  });
  const queryClient = useQueryClient();

  return (
    <form onSubmit={(e: any) => mutation.mutate(e)}>
      <ToastContainer />
      <PopLayout>
        <div className=" flex justify-between items-start h-fit">
          <Header
            title="Create Watchlist"
            brief="Create a watchlist and add the stocks you want to follow."
          />
          <XIcon color="#98A2B3" setOverlay={setOverlay} />
        </div>
        <div className=" w-full flex flex-col mt-[20px]">
          <Inputs
            text="Name"
            name="listName"
            holder="List name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            spanClassName=" text-[#475467] font-[500]"
            inputClassName="border-[#D0D5DD]"
          />
          <span className=" text-[#475467] text-[14px] font-[400] mt-[4px]">
            {textLength(name)} Characters
          </span>
          <hr className=" mt-[14px]" />
          <div className=" mt-[14px]">
            <Search />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-[12px]  mt-[14px] overflow-y-auto">
          <StockPop current />
          <StockPop />
          <StockPop />
        </div>
        <div className=" mt-[20px] flex justify-between items-center gap-[6px]">
          <button
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
