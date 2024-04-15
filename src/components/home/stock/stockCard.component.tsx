import Button from "@/components/default/button.component";
import IconButton from "@/components/default/iconButton.component";
import Image from "next/image";
import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import WatchStore from "@/store/watchlist";
import { usePathname } from "next/navigation";
import { stocksStore } from "@/store/stocks";
import MyImage from "@/components/image";
import ContentLoader from "react-content-loader";

export default function StockCard(props: { data: any; loading: boolean }) {
  const { updateOverlay } = WatchStore();
  const { data, loading } = props;

  const getCurrentTimeEST = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Cairo", // Egypt Time Zone
    };

    const currentTime: Date = new Date();
    const egyptTime: string = currentTime.toLocaleString("en-US", options);

    // Add 2 hours to the current time
    const futureTime: Date = new Date(
      currentTime.getTime() + 1 * 60 * 60 * 1000
    );
    const futureEgyptTime: string = futureTime.toLocaleString("en-US", options);
    return `${futureEgyptTime} EST`;
  };

  return (
    <div className=" flex w-full justify-between items-start mt-6 text-sm">
      <div className=" flex gap-2">
        {!loading && (
          <MyImage
            alt="stockImage"
            src={data?.image}
            width={66}
            height={66}
            className=" rounded-[6px]"
            defaultImage="/images/trad.jpg"
          />
        )}
        {loading && (
          <ContentLoader height={66} width={66} speed={2}>
            <rect x="0" y="0" rx="3" ry="3" width="66px" height="66px" />
          </ContentLoader>
        )}

        <div className=" flex-col flex justify-center">
          {!loading && (
            <span
              className="  font-semibold text-[16px] text-[#171D19]"
              style={{ color: "#0B0E0C" }}
            >
              {data?.companyName}
              <span className=" font-light" style={{ color: "#45564B" }}>
                {" "}
                | {data?.exchange} ({data?.exchangeShortName})
              </span>{" "}
            </span>
          )}
          {loading && (
            <ContentLoader height={20} width={100} speed={2}>
              <rect x="0" y="0" rx="3" ry="3" width="100px" height="20px" />
            </ContentLoader>
          )}
          {!loading && (
            <span
              className=" xl:flex-row lg:flex-row md:flex-row flex-col  font-bold flex  text-[32px] gap-1 "
              style={{ color: "#0B0E0C" }}
            >
              ${data?.price}
              <span
                className={` ${
                  data?.changes && data?.changes.toString()[0] !== "-"
                    ? "text-success"
                    : "text-decrease"
                } font-semibold  text-[12px] flex flex-row items-end text-xs gap-2`}
              >
                {data?.changes && data?.changes.toString()[0] === "-" && (
                  <FaArrowTrendDown className=" text-decrease" />
                )}
                {data?.changes && data?.changes.toString()[0] !== "-" && (
                  <FaArrowTrendUp className=" text-success" />
                )}
                {data?.changes && data?.changes}
                <span className=" text-xs font-normal flex items-end text-p">
                  {getCurrentTimeEST()}
                </span>{" "}
              </span>{" "}
            </span>
          )}
          {loading && (
            <ContentLoader
              height={20}
              width={120}
              speed={2}
              className=" mt-[5px]"
            >
              <rect x="0" y="0" rx="3" ry="3" width="120px" height="66px" />
            </ContentLoader>
          )}
        </div>
      </div>
      <div className=" flex gap-2  xl:flex-row lg:flex-row md:flex-row flex-col">
        <IconButton
          text="Buy Stock"
          color="#2E644E"
          bgColor="#FFFFFF"
          left={true}
          icon={<MdFormatListBulletedAdd className=" text-[#323232]" />}
          click={() => updateOverlay(1)}
        />
        {/* <Button text="Trade" color="#FFFFFF" bgColor="#2E644E" /> */}
      </div>
    </div>
  );
}
