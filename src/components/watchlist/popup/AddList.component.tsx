"use client";
import PopLayout from "@/components/layouts/pop.layout";
import React, { useState } from "react";
import Header from "@/components/watchlist/popup/header.component";
import XIcon from "@/icons/x.icon";
import Add from "./cards.component.tsx/add.component";
import WatchStore from "@/store/watchlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddStock } from "@/services/watchlist/addStock.service";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";

export default function AddList() {
  const { updateOverlay, data } = WatchStore();
  const [list, setLists] = useState<Array<string>>([]);
  const notify = async (error: string) => toast.error(error);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (e) => {
      return AddStock(notify, getCookie("AccessToken"), list, updateOverlay);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Watchlists"] });
    },
  });
  return (
    <PopLayout>
      <div className=" flex justify-between items-start">
        <Header
          title="Add to Watchlist"
          brief="Add the stock to your chosen list."
        />
        <XIcon color="#98A2B3" setOverlay={updateOverlay} />
      </div>

      <div className="w-full h-fit mt-20px flex flex-col gap-[12px]  mt-[20px] overflow-y-auto">
        {data.map(
          (
            item: { id: string; name: string; userId: string; Stocks: any[] },
            idx: number
          ) => {
            return (
              <Add
                key={item.id}
                current={list.includes(item.id)}
                title={item.name}
                id={item.id}
                length={item.Stocks ? item.Stocks.length : 0}
                setList={setLists}
                list={list}
              />
            );
          }
        )}
      </div>
      <div className=" mt-[20px] flex justify-between items-center gap-[6px]">
        <button
          onClick={() => updateOverlay(0)}
          className=" bg-white border border-[#D0D5DD] rounded-[8px] shad py-[10px] px-[16px] flex-1 "
        >
          Cancel
        </button>
        <button
          onClick={() => mutation.mutate()}
          className=" bg-[#2E644E] text-white border border-[#D0D5DD] rounded-[8px] shad py-[10px] px-[16px] flex-1 "
        >
          {mutation.isPending ? "Loading" : "Add"}
        </button>
      </div>
    </PopLayout>
  );
}
