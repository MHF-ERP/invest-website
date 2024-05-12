"use client";
import SmallLogo from "../../default/smallLogo";
import Profile from "./profile.component";
import { RiHome6Line } from "react-icons/ri";
import { MdInsertChartOutlined } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { logoutRequest } from "@/services/home/logout.service";
import { deleteCookie, getCookie } from "cookies-next";
import { useState } from "react";
import Image from "next/image";
import { stocksStore } from "@/store/stocks";
import { SlWallet } from "react-icons/sl";
import { GetSymbol } from "@/services/home/indices.service";

export default function Navigator(props: { current: number }) {
  const { current } = props;
  const Taps = [
    {
      icon: (
        <RiHome6Line
          className={` text-xl ${current === 1 ? "text-white" : ""} `}
        />
      ),
      name: "Home",
      link: "/home",
    },
    {
      icon: (
        <MdInsertChartOutlined
          className={` text-xl ${current === 2 ? "text-white" : ""} `}
        />
      ),
      name: "My Stocks",
      link: "/myStocks",
    },
    {
      icon: (
        <SlWallet
          className={` text-xl ${current === 3 ? "text-white" : ""} `}
        />
      ),
      name: "Order History",
      link: "/order_history",
    },
    // {
    //   icon: (
    //     <PortfolioIcon color={`${current === 3 ? "#FFFFFF" : "#ACCDB7"} `} />
    //   ),
    //   name: "Portfolio",
    //   link: "/portfolio",
    // },
    // {
    //   icon: (
    //     <HiOutlineClipboardDocumentCheck
    //       className={` text-xl ${current === 4 ? "text-white" : ""} `}
    //     />
    //   ),
    //   name: "Discover",
    //   link: "/discover",
    // },
  ];
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: () => {
      return logoutRequest(getCookie("AccessToken")!, router, deleteCookie);
    },
  });
  const {
    market,
    setMarket,
    setStocks,
    DataUp,
    DataDown,
    setDataUp,
    setDataDown,
    setOriginData,
    setData,
  } = stocksStore();
  const queryClient = useQueryClient();

  const mutation2 = useMutation({
    mutationFn: () => {
      return GetSymbol(
        setStocks,
        market,
        true,
        setDataUp,
        setDataDown,
        true,
        setOriginData,
        setData
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["AiStocks"] });
      queryClient.invalidateQueries({ queryKey: ["indices2"] });
    },
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the visibility of dropdown menus
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className=" h-full xl:min-w-60 lg:min-w-60 md:w-fit flex flex-col justify-between">
      <SmallLogo />
      <div className=" flex flex-col gap-3 pt-20 px-4  text-md">
        {Taps.map(
          (item: { icon: any; name: string; link: string }, idx: number) => {
            return (
              <Link
                href={item["link"]}
                key={idx}
                className={` hover:bg-main2 hover:text-white duration-75 text-nav cursor-pointer flex items-center xl:justify-start lg:justify-start justify-center gap-3 py-2 px-2 w-full ${
                  idx + 1 === current
                    ? "bg-main2 font-bold text-white"
                    : " text-nav"
                } rounded-lg `}
              >
                {item.icon}

                <span className="xl:flex lg:flex hidden">{item["name"]}</span>
              </Link>
            );
          }
        )}
      </div>
      <div className=" flex flex-col px-5 mb-6  items-center">
        <div
          onClick={toggleDropdown}
          className={`hover:bg-main2 py-2 px-2 hover:text-white duration-75 text-nav cursor-pointer mb-6   flex items-center justify-between   gap-3   w-full  rounded-lg `}
        >
          <span className="xl:flex lg:flex text-[18px] hidden ">Markets</span>
          {!dropdownVisible && <IoIosArrowUp className=" text-[12px] " />}
          {dropdownVisible && <IoIosArrowDown className=" text-[12px] " />}
        </div>
        {dropdownVisible && (
          <ul className="mb-6 w-full xl:px-[18px] lg:px-[18px] md:px-[18px] flex flex-col gap-4">
            <li
              onClick={() => {
                setMarket("SAU");
                mutation2.mutate();
              }}
              className={` hover:px-2 cursor-pointer ${
                market === "SAU" ? " text-green-500" : "text-white"
              } w-full flex items-center justify-between `}
            >
              SAU
              <Image
                className=" xl:flex lg:flex md:flex hidden"
                src="https://flagcdn.com/16x12/sa.png"
                width="16"
                height="12"
                alt="USA"
              />
            </li>
            <li
              onClick={() => {
                setMarket("USA");
                mutation2.mutate();
              }}
              className={` w-full ${
                market === "USA" ? "text-green-500" : "text-white"
              } hover:px-2 cursor-pointer flex items-center justify-between `}
            >
              USA
              <Image
                className=" xl:flex lg:flex md:flex hidden"
                src="https://flagcdn.com/16x12/us.png"
                width="16"
                height="12"
                alt="USA"
              />
            </li>
            <li
              onClick={() => {
                setMarket("UK");
                mutation2.mutate();
              }}
              className={` w-full ${
                market === "UK" ? "text-green-500" : "text-white"
              } hover:px-2 cursor-pointer flex items-center justify-between`}
            >
              UK
              <Image
                className=" xl:flex lg:flex md:flex hidden"
                src="https://flagcdn.com/16x12/gb.png"
                width="16"
                height="12"
                alt="UK"
              />
            </li>
            <li
              onClick={() => {
                setMarket("AUS");
                mutation2.mutate();
              }}
              className={` ${
                market === "AUS" ? "text-green-500" : "text-white"
              } w-full hover:px-2 cursor-pointer flex items-center justify-between `}
            >
              AUS
              <Image
                className=" xl:flex lg:flex md:flex hidden"
                src="https://flagcdn.com/16x12/au.png"
                width="16"
                height="12"
                alt="aus"
              />
            </li>
            <li
              onClick={() => {
                setMarket("JAP");
                mutation2.mutate();
              }}
              className={` ${
                market === "JAP" ? "text-green-500" : "text-white"
              } w-full hover:px-2 cursor-pointer   flex items-center justify-between`}
            >
              JAP
              <Image
                className=" xl:flex lg:flex md:flex hidden"
                src="https://flagcdn.com/16x12/jp.png"
                width="16"
                height="12"
                alt="aus"
              />
            </li>
          </ul>
        )}
        <IoIosLogOut
          onClick={() => mutation.mutate()}
          className=" xl:hidden lg:hidden flex mb-6 text-lg text-nav cursor-pointer"
        />

        <hr className=" xl:flex lg:flex w-full hidden mb-4  border-nav" />
        <Profile />
      </div>
    </div>
  );
}
