"use client";
import { AddStock } from "@/services/watchlist/addStock.service";
import { stocksStore } from "@/store/stocks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";

const Table = (props: {
  data: any;
  setRowsToShow: any;
  setData: any;
  allData: any;
  setSymbol: any;
  setOverlay: any;
  updateData: any;
}) => {
  const { updateData, setRowsToShow, setData, allData } = props;
  const { data } = props;
  const { stocks, setStocks } = stocksStore();
  const handleImageError = (symbol: string) => {
    const updatedStocks = [...stocks];
    const stockIndex = updatedStocks.findIndex(
      (stock) => stock.symbol === symbol
    );
    if (stockIndex !== -1) {
      updatedStocks[stockIndex].image = "/images/trad.jpg";
      setStocks(updatedStocks);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      let availableHeight = window.innerHeight;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // For tablets and mobiles
        availableHeight -= 250;
      } else {
        // For other devices
        availableHeight -= 100;
      }
      const rowHeight = 75; // Get the height of each row (including padding, margin, etc.)

      const calculatedRows = Math.floor(availableHeight / rowHeight) - 1;
      setRowsToShow(calculatedRows);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Call initially to set rows on first render

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [change, setChange] = useState(false);
  const [prediction, setPrediction] = useState(false);
  const [price, setPrice] = useState(false);
  const [accuracy, setAccuracy] = useState(false);

  return (
    <div className=" w-full  overflow-y-hidden  flex flex-col">
      <div className=" w-full custonScroll2 overflow-x-auto h-fit border-t  rounded-t-xl border-b rounded-b-xl border-r border-l border-[#EAECF0]">
        <table className="table-auto w-full overflow-x-auto   border-[#EAECF0]  ">
          <thead>
            <tr
              className={`   border-b rounded-t-xl  border-[#EAECF0] text-[#475467] text-left text-[12px] font-[500]    `}
            >
              <th className="py-[12px] px-[24px] w-[30%]">Stocks</th>
              <th className="w-[15%] px-[24px] py-[12px] text-center ">
                <span
                  onClick={() => {
                    if (!change) {
                      const sort = stocks.sort(
                        (a: any, b: any) => a.changes - b.changes
                      );
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.symbol)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      setData(filteredData1);
                      console.log(filteredData1);

                      setAccuracy(false);
                      setPrice(false);
                      setChange(true);
                      setPrediction(false);
                    } else {
                      const sort = stocks.sort(
                        (a: any, b: any) => b.changes - a.changes
                      );
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.symbol)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      console.log(filteredData1);
                      setData(filteredData1);
                      setChange(false);
                    }
                  }}
                  className="flex gap-2  justify-center cursor-pointer items-center"
                >
                  Change 1d
                  {!change ? <FaArrowDown /> : <FaArrowUp />}
                </span>
              </th>

              <th className="w-[10%] px-[24px] py-[12px] text-center ">
                <span
                  onClick={() => {
                    if (!prediction) {
                      const sort = allData.sort((a: any, b: any) => {
                        // Convert the predictions to lowercase for case-insensitive sorting
                        const predictionA = a.prediction.toLowerCase();
                        const predictionB = b.prediction.toLowerCase();

                        if (predictionA < predictionB) {
                          return -1; // A comes before B
                        }
                        if (predictionA > predictionB) {
                          return 1; // A comes after B
                        }
                        return 0; // Predictions are equal
                      });
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.id)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      updateData(filteredData1);
                      console.log(filteredData1);

                      setAccuracy(false);
                      setPrice(false);
                      setChange(false);
                      setPrediction(true);
                    } else {
                      const sort = allData.sort((a: any, b: any) => {
                        // Convert the predictions to lowercase for case-insensitive sorting
                        const predictionA = a.prediction.toLowerCase();
                        const predictionB = b.prediction.toLowerCase();

                        if (predictionA < predictionB) {
                          return 1; // A comes before B
                        }
                        if (predictionA > predictionB) {
                          return -1; // A comes after B
                        }
                        return 0; // Predictions are equal
                      });
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.id)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      updateData(filteredData1);

                      setPrediction(false);
                    }
                  }}
                  className="flex gap-2 justify-center cursor-pointer items-center"
                >
                  Prediction
                  {!prediction ? <FaArrowDown /> : <FaArrowUp />}
                </span>
              </th>
              <th className="w-[10%] px-[24px] py-[12px] text-center ">
                <span
                  onClick={() => {
                    if (!accuracy) {
                      const sort = allData.sort(
                        (a: any, b: any) => a.probability - b.probability
                      );
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.id)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      updateData(filteredData1);

                      setPrediction(false);
                      setPrice(false);
                      setChange(false);
                      setAccuracy(true);
                    } else {
                      const sort = allData.sort(
                        (a: any, b: any) => b.probability - a.probability
                      );
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.id)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      updateData(filteredData1);

                      setAccuracy(false);
                    }
                  }}
                  className="cursor-pointer flex gap-2 justify-center items-center"
                >
                  Accuracy
                  {!accuracy ? <FaArrowDown /> : <FaArrowUp />}
                </span>
              </th>
              <th className="w-[10%] px-[24px] py-[12px] text-center ">
                <span
                  onClick={() => {
                    if (!price) {
                      const sort = stocks.sort(
                        (a: any, b: any) => a.price - b.price
                      );
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.symbol)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      setData(filteredData1);
                      setAccuracy(false);
                      setPrice(true);
                      setChange(false);
                      setPrediction(false);
                    } else {
                      const sort = stocks.sort(
                        (a: any, b: any) => b.price - a.price
                      );
                      const sortedData1 = sort.map((item: any) =>
                        allData.find((obj: any) => obj.id === item.symbol)
                      );
                      const filteredData1 = sortedData1.filter(
                        (item: any) => item !== undefined
                      );
                      setData(filteredData1);
                      setPrice(false);
                    }
                  }}
                  className="flex gap-2 justify-center cursor-pointer items-center"
                >
                  Price
                  {!price ? <FaArrowDown /> : <FaArrowUp />}
                </span>
              </th>
              <th className="w-[20%] px-[24px] py-[12px] text-center "></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, idx: number) => {
              const stock =
                stocks &&
                stocks.length > 0 &&
                stocks.find((it: any) => it["symbol"] === item["id"]);

              return (
                <tr
                  key={idx}
                  className={` ${data.length - 1 !== idx ? "border-b":""} h-[20px]    ${
                    idx === data.length - 1 ? "rounded-[20px]" : ""
                  } border-[#EAECF0] text-center   `}
                >
                  <td className="py-[12px]  px-[24px] max-h-[20px] w-[400px]">
                    <div className="flex xl:w-[100%] lg:w-[100%]  w-[400px] items-center space-x-2">
                      {stock && (
                        <Image
                          alt="img"
                          src={stock.image ? stock.image : "/images/trad.jpg"}
                          height={40}
                          width={40}
                          className=" w-[40px] lg:hidden flex h-[40px] rounded-[6px]"
                          onError={() => handleImageError(stock.symbol)}
                        />
                      )}
                      {stock && (
                        <Image
                          alt="img"
                          src={stock.image ? stock.image : "/images/trad.jpg"}
                          height={32}
                          width={32}
                          className=" hidden lg:flex 
                          h-[32px] rounded-[6px]"
                          onError={() => handleImageError(stock.symbol)}
                        />
                      )}
                      {!stock && (
                        <div className=" w-[32px] h-[32px]">
                          <ContentLoader
                            key={idx}
                            height={32}
                            width={32}
                            speed={2}
                          >
                            <rect
                              x="0"
                              y="0"
                              rx="3"
                              ry="3"
                              width="32px"
                              height="32px"
                            />
                          </ContentLoader>
                        </div>
                      )}

                      <div className=" gap-[4px   ] text-start  justify-center  h-[40px]  w-full flex flex-col">
                        {stock && (
                          <span className=" font-[500] text-[12px] lg:text-[10px] text-[#101828]">
                            {stock && stock.companyName}
                          </span>
                        )}
                        {!stock && (
                          <span className="  w-[100px] font-[500] text-[12px] lg:text-[10px] text-[#101828]">
                            <ContentLoader
                              key={idx}
                              width={100}
                              height={10}
                              speed={2}
                            >
                              <rect
                                x="0"
                                y="0"
                                rx="3"
                                ry="3"
                                width="100%"
                                height="10px"
                              />
                            </ContentLoader>
                          </span>
                        )}
                        {stock && (
                          <span className=" text-[#475467] text-[12px] lg:text-[10px]  font-[400]">
                            {" "}
                            {stock && stock.symbol}
                          </span>
                        )}
                        {!stock && (
                          <span className="  mt-[5px] w-[60px] font-[500] text-[12px] lg:text-[10px] text-[#101828]">
                            <ContentLoader
                              key={idx}
                              width={60}
                              height={10}
                              speed={2}
                            >
                              <rect
                                x="0"
                                y="0"
                                rx="3"
                                ry="3"
                                width="60%"
                                height="10px"
                              />
                            </ContentLoader>
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {stock && (
                    <td
                      className={` } t font-[500] text-[14px] py-[12px] px-[24px] `}
                    >
                      {stock.changes}
                    </td>
                  )}
                  {!stock && (
                    <td className=" text-[#101828]   font-[500] text-[14px] py-[12px] px-[24px]  ">
                      <ContentLoader key={idx} width={40} height={10} speed={2}>
                        <rect
                          x="0"
                          y="0"
                          rx="3"
                          ry="3"
                          width="60%"
                          height="10px"
                        />
                      </ContentLoader>
                    </td>
                  )}
                  {stock && (
                    <td className=" text-[#101828] font-[500] text-[14px] py-[12px] px-[24px] w-[5%]">
                      {item.prediction}
                    </td>
                  )}
                  {!stock && (
                    <td className=" text-[#101828] font-[500] text-[14px] py-[12px] px-[24px] w-[5%]">
                      <ContentLoader key={idx} width={40} height={10} speed={2}>
                        <rect
                          x="0"
                          y="0"
                          rx="3"
                          ry="3"
                          width="60%"
                          height="10px"
                        />
                      </ContentLoader>
                    </td>
                  )}
                  {stock && (
                    <td className=" text-[#101828] font-[500] text-[14px] py-[12px] px-[24px] w-[5%]">
                      {item.probability}%
                    </td>
                  )}
                  {!stock && (
                    <td className=" text-[#101828] font-[500] text-[14px] py-[12px] px-[24px] w-[5%]">
                      <ContentLoader key={idx} width={40} height={10} speed={2}>
                        <rect
                          x="0"
                          y="0"
                          rx="3"
                          ry="3"
                          width="60%"
                          height="10px"
                        />
                      </ContentLoader>
                    </td>
                  )}
                  {stock && (
                    <td className="    py-[12px] px-[24px] w-[5%]  ">
                      <div className=" flex flex-col">
                        <span className=" text-[#101828] font-[500] text-[14px] flex gap-1 items-end">
                          {stock && stock.price}
                          <span className=" text-[8px]">
                            {stock && stock.currency}
                          </span>
                        </span>
                        {/* <span
                          className={`${
                            stock["changes"]
                              ? "text-[#067647]"
                              : "text-[#F04438]"
                          }  text-[14px] font-[400] `}
                        >
                          {stock["changes"] ? "+" : "-"}
                          {stock && stock.changes[0] === "-"
                            ? stock.changes.slice(1)
                            : stock.changes}
                        </span> */}
                      </div>
                    </td>
                  )}
                  {!stock && (
                    <td className=" text-[#101828] font-[500] text-[14px] py-[12px] px-[24px] w-[5%]">
                      <div className=" flex flex-col">
                        <ContentLoader
                          key={idx}
                          width={40}
                          height={10}
                          speed={2}
                        >
                          <rect
                            x="0"
                            y="0"
                            rx="3"
                            ry="3"
                            width="60%"
                            height="10px"
                          />
                        </ContentLoader>
                        {/* <ContentLoader
                          key={idx}
                          width={30}
                          height={10}
                          speed={2}
                          className=" mt-[5px]"
                        >
                          <rect
                            x="0"
                            y="0"
                            rx="3"
                            ry="3"
                            width="60%"
                            height="10px"
                          />
                        </ContentLoader> */}
                      </div>
                    </td>
                  )}
                  {stock && (
                    <td className=" text-[#101828] font-[500] text-[14px] py-[12px] px-[24px] w-[200px]">
                      <div
                        onClick={() => {
                          props.setOverlay(1);
                          props.setSymbol(stock.symbol);
                        }}
                        className=" cursor-pointer font-[600] border border-[#DBDBDB] w-[100%] text-center px-[8px] py-[12px] rounded-[8px] text-[12px] text-[#2E644E]"
                      >
                        <span>Buy Stock</span>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
