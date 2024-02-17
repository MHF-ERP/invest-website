import Delete from "@/icons/delete.icon";
import { cn } from "@/lib/cn";
import { DeleteWatchLists } from "@/services/watchlist/deleteWatchList.service";
import WatchStore from "@/store/watchlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import React, { useState } from "react";

export default function Add(props: {
  id: string;
  title: string;
  length: number;
  current?: boolean;
  without?: boolean;
  setList?: React.Dispatch<React.SetStateAction<any>>;
  list?: any;
  setOverlay?: any;
}) {
  const [show, setShow] = useState(false);
  const { id, title, length, current, without, setList, list, setOverlay } =
    props;

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
  const Confirm = () => {
    return (
      <div
        className={cn(
          "rounded-[12px] flex flex-col gap-[12px] items-center border-[2px] p-[12px] w-full border-[#EAECF0]",
          { "cursor-pointer hover:border-[#2E644E]": !without },
          { "border-[#2E644E]": current },
          { "justify-between": without }
        )}
      >
        <span className="text-red-600 font-semibold !leading-8">
          You are about to delete <strong>{title}</strong> watchlist
        </span>
        <div className="flex justify-between w-full px-5 items-center">
          <button
            className="bg-red-600 rounded-xl p-2"
            onClick={() => {
              mutation.mutate();
              setShow(false);
            }}
          >
            <Delete color="white" />
          </button>
          <button
            className="rounded-md p-2 font-semibold"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };
  return show ? (
    <Confirm />
  ) : (
    <div
      id={id}
      onClick={() => {
        list.includes(id)
          ? setList!(list.filter((item: any) => item !== id))
          : setList!([...list, id]);
      }}
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
          onClick={() => {
            setShow(true);
          }}
          className=" hover:opacity-50 cursor-pointer flex items-center justify-center p-[8px] border border-[#EAECF0] rounded-[8px]"
        >
          <Delete color="#344054" />
        </div>
      )}
    </div>
  );
}
