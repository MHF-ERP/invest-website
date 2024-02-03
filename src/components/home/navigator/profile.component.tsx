"use client";
import { chexkLength } from "@/functions/textLength";
import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
// import { useRouter } from "next/navigation";
import { logoutRequest } from "@/services/home/logout.service";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { idServises } from "@/services/signup/id.service";
// import { useRouter } from "next/navigation";
import { profileRequest } from "@/services/home/profile.service";
import Logout from "./logout.component";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { MEDIA } from "@/static/links";
// import {} from "next-clie"
export default function Profile() {
  const router = useRouter();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Profile"],
    queryFn: () => profileRequest(getCookie("AccessToken")!),
    // enabled: false,
  });
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className=" flex justify-between w-full items-start">
      <div className=" flex gap-2 items-center">
        <Image
          alt="user Image"
          width={50}
          height={50}
          className=" w-10 h-10  rounded-full"
          src={`${MEDIA}${
            !isLoading && data !== undefined && data!["data"]["data"]["image"]
          }`}
        />
        {!isLoading && (
          <div className=" xl:flex lg:flex hidden  flex-col">
            <h1 className=" text-white font-semibold text-sm">
              {data !== undefined && data!["data"]["data"]["name"]}
            </h1>
            <p className=" -mt-1 text-sm" style={{ color: "#C3E8CF" }}>
              {data !== undefined &&
                chexkLength(data!["data"]["data"]["email"], 19)}
            </p>
          </div>
        )}
      </div>
      <Logout />
    </div>
  );
}
