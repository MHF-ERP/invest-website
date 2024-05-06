"use client";
import SmallLogo from "../../default/smallLogo";
import Profile from "./profile.component";
import { RiHome6Line } from "react-icons/ri";
import { MdInsertChartOutlined } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";

import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { logoutRequest } from "@/services/home/logout.service";
import { deleteCookie, getCookie } from "cookies-next";
import { useState } from "react";
import Image from "next/image";

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
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [market, setMarket] = useState<string>("SAU");

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
          <ul className="mb-6 w-full px-[18px] flex flex-col gap-4">
            <li
            onClick={()=>setMarket("SAU")}
            className={` hover:px-2 cursor-pointer ${market === "SAU" && "px-2"} w-full flex items-center justify-between text-white`}>
              SAU
              <Image
                src="https://flagcdn.com/16x12/sa.png"
                width="16"
                height="12"
                alt="USA"
              />
            </li>
            <li 
            onClick={()=>setMarket("USA")}
            
            className={` w-full ${market === "USA" && "px-2"} hover:px-2 cursor-pointer flex items-center justify-between text-white`}>
              USA
              <Image
                src="https://flagcdn.com/16x12/us.png"
                width="16"
                height="12"
                alt="USA"
              />
            </li>
            <li 
            onClick={()=>setMarket("UK")}
            
            className={` w-full ${market === "UK" && "px-2"} hover:px-2 cursor-pointer flex items-center justify-between text-white`}>
              UK
              <Image
                src="https://flagcdn.com/16x12/gb.png"
                width="16"
                height="12"
                alt="UK"
              />
            </li>
            <li 
            onClick={()=>setMarket("AUS")}
            
            className={` ${market === "AUS" && "px-2"} w-full hover:px-2 cursor-pointer flex items-center justify-between text-white`}>
              AUS
              <Image
                src="https://flagcdn.com/16x12/au.png"
                width="16"
                height="12"
                alt="aus"
              />
            </li>
            <li 
            onClick={()=>setMarket("JAP")}
            
            className={` ${market === "JAP" && "px-2"} w-full hover:px-2 cursor-pointer   flex items-center justify-between text-white`}>
              JAP
              <Image
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
