import { stocksStore } from "@/store/stocks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";

const Table = (props: { data: any; up: boolean; updateData: any }) => {
  const { data, up, updateData } = props;
    const [allData, setAllData] = useState<any>();
    useEffect(()=>{
     setAllData(data);
    },[data]);

   
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
  const router = useRouter();
  const [accuracy, setAccuracy] = useState(false);
  const [price, setPrice] = useState(false);

  return (
    <div className=" w-full  overflow-y-hidden  flex flex-col  ">
      <div
        className={` w-full overflow-x-auto flex justify-between  border-t    border-[#EAECF0] px-[20px] py-[8px] items-center ${
          up
            ? "text-[#17B26A] xl:border-r-0 border-r"
            : "text-[#F04438] border-r"
        }`}
      >
        <span className=" text-[12px] font-[600]">
          {up
            ? "Potential stock growth tomorrow"
            : "Potential stock contraction tomorrow"}
        </span>
        {up && (
          <IoIosTrendingUp
            className={` ${up ? "text-#17B26A" : "text-#F04438"} `}
          />
        )}
        {!up && (
          <IoIosTrendingDown
            className={` ${up ? "text-#17B26A" : "text-#F04438"} `}
          />
        )}
      </div>
      <div className=" w-full custonScroll2 overflow-x-auto h-fit ">
        <table className="table-auto w-full overflow-x-auto  border-[#EAECF0]  ">
          <thead>
            <tr
              className={` border-b border-t border-[#EAECF0] text-[#475467]  text-left text-[12px] font-[500]    `}
            >
              <th className="py-[12px] px-[24px] w-[100%]">Stocks</th>
              <th className=" w-[20%] px-[24px] py-[12px] text-center ">
                <span
                  onClick={() => {
                    const sort = !accuracy
                      ? data.sort(
                          (a: any, b: any) => a.probability - b.probability
                        )
                      : data.sort(
                          (a: any, b: any) => b.probability - a.probability
                        );
                    setAllData(data);
                        // updateData(sort);
                    setPrice(false);
                    setAccuracy(!accuracy);
                  }}
                  className=" cursor-pointer flex gap-2 justify-center items-center"
                >
                  Accuracy
                  {!accuracy ? <FaArrowDown /> : <FaArrowUp />}
                </span>
              </th>
              <th className="  w-[20%]   px-[24px] py-[12px] text-center ">
                <span
                  onClick={() => {
                    const sort = !price
                      ? stocks.sort((a: any, b: any) => a.price - b.price)
                      : stocks.sort((a: any, b: any) => b.price - a.price);
                    const sortedData1 = sort.map((item: any) =>
                      data.find((obj: any) => obj.id === item.symbol)
                    );
                    const filteredData1 = sortedData1.filter(
                      (item: any) => item !== undefined
                    );
                   setAllData(filteredData1);
                 //   updateData(filteredData1);
                    setPrice(!price);
                    setAccuracy(false);
                  }}
                  className="flex gap-2 justify-center cursor-pointer items-center"
                >
                  Price
                  {!price ? <FaArrowDown /> : <FaArrowUp />}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allData && allData.slice(0,5).map((item: any, idx: number) => {
              const stock =
                stocks && stocks.find((it: any) => it["symbol"] === item["id"]);
                   return (
                <tr
                  onClick={() => router.push("/stock/" + stock["symbol"])}
                  key={idx}
                  className={` ${idx !== data.length -1?"border-b":""}   h-[20px] cursor-pointer   ${
                    idx === data.length - 1 ? "rounded-[20px]" : ""
                  } border-[#EAECF0] text-center  `}
                >
                  <td className="py-[12px]  px-[24px] max-h-[20px] w-[500px]">
                    <div className="flex xl:w-[100%] lg:w-[100%] md:w-[100%] w-[300px] items-center space-x-2">
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
                            {stock && stock.sector}
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
                        <span className=" text-[#101828] font-[500] text-[14px] flex items-end gap-1">
                          {stock && stock.price}{" "}
                          <span className=" text-[8px]">{stock.currency}</span>
                        </span>
                        <span
                          className={`${
                            stock && stock.changes &&
                            stock!.changes!.toString()[0] !== "-"
                              ? "text-[#067647]"
                              : "text-[#F04438]"
                          }  text-[14px] font-[400] `}
                        >
                          { stock && stock.chages && stock!.changes!.toString()[0] !== "-" ? "+" : ""}

                          {stock!.changes!}
                        </span>
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
                        <ContentLoader
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
                        </ContentLoader>
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
