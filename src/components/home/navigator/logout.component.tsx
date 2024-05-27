"use client";
import { logoutRequest } from "@/services/home/logout.service";
import { QueryClient, useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { IoIosLogOut } from "react-icons/io";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { stocksStore } from "@/store/stocks";

export default function Logout() {
  //   const mutation = useMutation({
  const router = useRouter();
  const queryClient = new QueryClient();
  const { allStocks } = stocksStore();
  const mutation = useMutation({
    mutationFn: () => {
      return logoutRequest(getCookie("AccessToken")!, router, deleteCookie);
    },
    onSuccess: () => {
      queryClient.clear();
    },
  });
  return (
    <button onClick={() => mutation.mutate()}>
      <IoIosLogOut className=" xl:flex lg:flex hidden text-nav cursor-pointer" />
    </button>
  );
}
