"use client";
import SmallLogo from "../../default/smallLogo";
import Profile from "./profile.component";
import { RiHome6Line } from "react-icons/ri";
import { MdInsertChartOutlined } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";

import PortfolioIcon from "@/icons/portfolio.icon";
import { useRouter } from "next/navigation";
import { logoutRequest } from "@/services/home/logout.service";
import { deleteCookie, getCookie } from "cookies-next";

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
      name: "Watchlist",
      link: "/watchlist",
    },
    {
      icon: (
        <PortfolioIcon color={`${current === 3 ? "#FFFFFF" : "#ACCDB7"} `} />
      ),
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      icon: (
        <HiOutlineClipboardDocumentCheck
          className={` text-xl ${current === 4 ? "text-white" : ""} `}
        />
      ),
      name: "Discover",
      link: "/discover",
    },
  ];
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: () => {
      return logoutRequest(getCookie("AccessToken")!, router, deleteCookie);
    },
  });

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
          className={` cursor-pointer mb-6   flex items-center xl:justify-start lg:justify-start justify-center gap-3 py-2  w-full  rounded-lg `}
        >
          <IoSettingsOutline className=" text-2xl text-nav" />

          <span className="xl:flex lg:flex hidden text-nav">Settings</span>
        </div>
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
