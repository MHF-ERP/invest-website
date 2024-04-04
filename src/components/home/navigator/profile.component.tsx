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
import ContentLoader from "react-content-loader";
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
        {!isLoading && data !== undefined && (
          <Image
            alt="user Image"
            width={50}
            height={50}
            className=" w-10 h-10  rounded-full"
            src={`${MEDIA}${
              !isLoading && data !== undefined && data!["data"]["data"]["image"]
            }`}
          />
        )}
        {isLoading && (
          <div className=" w-[32px] h-[32px]">
            <ContentLoader height={32} width={32} speed={2}>
              <rect x="0" y="0" rx="3" ry="3" width="32px" height="32px" />
            </ContentLoader>
          </div>
        )}
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
        {isLoading && (
          <div className=" xl:flex lg:flex hidden w-full  flex-col">
            <ContentLoader height={10} width={100} speed={2}>
              <rect x="0" y="0" rx="3" ry="3" width="100px" height="32px" />
            </ContentLoader>
            <ContentLoader
              height={10}
              width={40}
              speed={2}
              className=" mt-[5px]"
            >
              <rect x="0" y="0" rx="3" ry="3" width="40px" height="10px" />
            </ContentLoader>
          </div>
        )}
      </div>
      <Logout />
    </div>
  );
}
