import Image from "next/image";
import TextDay from "./textDay.component";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { stocksStore } from "@/store/stocks";

export default function Day(props: {
  setOpen: any;
  open: boolean;
  idx: number;
  item: any;
  item2: any;
  current: number;
}) {
  console.log("]]]]]]]]]");
  const { setOpen, item, item2 } = props;
  const { stocks, setStocks } = stocksStore();
  console.log(item2);

  return (
    <div
      onClick={() => {
        if (props.current === props.idx - 1) {
          setOpen(-1);
        } else {
          setOpen(props.idx - 1);
        }
      }}
      className=" flex flex-col  border  rounded-md "
    >
      <div className=" flex gap-4   items-center cursor-pointer p-[12px] ">
        <div className=" w-full flex gap-4">
          <Image
            alt="company"
            width="40"
            className=" w-[42px] h-[42px]"
            height="40"
            src={item2.image}
            onError={() => {
              const data = stocks.slice();
              data.filter((stock: any) => stock.symbol === item.symbol)[0][
                "image"
              ] = "/images/trad.jpg";
              setStocks(data);
            }}
          />
          <div className=" gap-[4px   ] text-start  justify-center  h-[40px]  w-full flex flex-col">
            {/* {stock && (
            <span className=" font-[500] text-[12px] lg:text-[10px] text-[#101828]">
              {stock && stock.companyName}
            </span>
          )} */}
            <span className=" font-[500] text-[16px] text-[#101828]">
              {item2.companyName}
            </span>
            {/* {!stock && (
            <span className="  w-[100px] font-[500] text-[12px] lg:text-[10px] text-[#101828]">
              <ContentLoader key={idx} width={100} height={10} speed={2}>
                <rect x="0" y="0" rx="3" ry="3" width="100%" height="10px" />
              </ContentLoader>
            </span>
          )} */}
            {/* {stock && (
            <span className=" text-[#475467] text-[12px] lg:text-[10px]  font-[400]">
              {" "}
              {stock && stock.sector}
            </span>
          )} */}
            <span className=" text-[#475467] text-[12px]  font-[400]">
              {" "}
              {item.symbol}
            </span>
            {/* {!stock && (
            <span className="  mt-[5px] w-[60px] font-[500] text-[12px] lg:text-[10px] text-[#101828]">
              <ContentLoader key={idx} width={60} height={10} speed={2}>
                <rect x="0" y="0" rx="3" ry="3" width="60%" height="10px" />
              </ContentLoader>
            </span>
          )} */}
          </div>
        </div>
        {props.current === props.idx - 1 ? (
          <IoIosArrowUp />
        ) : (
          <IoIosArrowDown />
        )}
      </div>
      <div
        className={`py-[20px] px-[20px] w-full ${
          props.open ? "flex" : "hidden"
        } flex flex-col`}
      >
        {/* <ImageDay /> */}
        <TextDay item={item} />
      </div>
    </div>
  );
}
