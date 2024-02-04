import Delete from "@/icons/delete.icon";
import { DeleteWatchLists } from "@/services/watchlist/deleteWatchList.service";
import WatchStore from "@/store/watchlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import React from "react";

export default function Add(props: {
  id: string;
  title: string;
  length: number;
  current?: boolean;
  without?: boolean;
  setList?: React.Dispatch<React.SetStateAction<any>> | undefined;
  list?: any;
}) {
  const { id, title, length, current, without, setList, list } = props;
  const { updateData, data } = WatchStore();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (e) => {
      return DeleteWatchLists(getCookie("AccessToken"), updateData, data, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Watchlists"] });
    },
  });
  return (
    <div
      onClick={() =>
        !list.includes(id)
          ? setList!([...list, id])
          : setList!(list.filter((item: string) => item !== id))
      }
      className={` ${
        !without ? " cursor-pointer hover:border-[#2E644E] " : ""
      } ${
        current ? "border-[#2E644E]" : " border-[#EAECF0] "
      }   rounded-[12px] flex gap-[12px] items-center border-[2px]  p-[12px] ${
        without ? "justify-between" : ""
      }`}
    >
      {!without ? (
        <div className="flex items-center w-[16px] h-[16px]  p-[2px]  justify-center ">
          <input
            name="Remember"
            id="disabled-checked-checkbox"
            type="checkbox"
            value=""
            checked={current ? true : false}
            className={`   text-[#2E644E] accent-[#2E644E] rounded-[4px] bg-gray-100 border-gray-300  focus:main`}
          />
        </div>
      ) : (
        ""
      )}

      <div className=" flex-1 flex-col gap-1 flex ">
        <span className=" font-[600] text-[14px] text-[#344054]">{title}</span>
        <span className=" font-[400] text-[14px] text-[#475467]">
          {length} Stocks
        </span>
      </div>
      {without && (
        <div
          onClick={() => mutation.mutate()}
          className=" hover:opacity-50 cursor-pointer flex items-center justify-center p-[8px] border border-[#EAECF0] rounded-[8px]"
        >
          <Delete color="#344054" />
        </div>
      )}
    </div>
  );
}
