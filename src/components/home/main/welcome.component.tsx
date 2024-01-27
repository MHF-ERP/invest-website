"use client";
import { profileRequest } from "@/services/home/profile.service";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";

export default function Welcome() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Profile"],
    queryFn: () => profileRequest(getCookie("AccessToken")!),
    // enabled: false,
  });
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className=" flex flex-col">
      <h1 className=" text-main font-bold text-3xl">
        Welcome back, {!isLoading && data!["data"]["data"]["name"]}
      </h1>
      <p className="text-p text-m">
        Track, manage and forecast your customers and orders.
      </p>
    </div>
  );
}
