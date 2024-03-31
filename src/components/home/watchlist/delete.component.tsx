import { DeleteWatchLists } from "@/services/watchlist/deleteWatchList.service";
import WatchStore from "@/store/watchlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import React from "react";
import Delete from "@/icons/delete.icon";
import { cn } from "@/lib/cn";
import { DeleteStock } from "@/services/home/deleteStocks";

export default function DeleteComponent(props: {
  id: string;
  title: string;
  setOverlay: any;
  symbol: string;
}) {
  const { updateData, data } = WatchStore();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (e) => {
      return DeleteStock(props.id, props.symbol);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Watchlists"] });
      queryClient.invalidateQueries({ queryKey: ["Watchlists2"] });
    },
  });
  return (
    <div
      className={cn(
        "rounded-[12px] flex flex-col gap-[12px] items-center border-[2px] p-[12px] w-full border-[#EAECF0]",
        "cursor-pointer hover:border-[#2E644E]"
      )}
    >
      <span className="text-red-600 font-semibold !leading-8">
        You are about to delete <strong>{props.title}</strong> stock
      </span>
      <div className="flex justify-between w-full px-5 items-center">
        <button
          className="bg-red-600 rounded-xl p-2"
          onClick={() => {
            mutation.mutate();
            props.setOverlay(0);
          }}
        >
          <Delete color="white" />
        </button>
        <button
          className="rounded-md p-2 font-semibold"
          onClick={() => {
            props.setOverlay(0);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
