import React from "react";

export default function Remove(props: {
  watchId?: string;
  setWatchlistId?: any;
  setSymbol?: any;
  symbol?: string;
  setOverlay?: any;
}) {
  const { setOverlay, setSymbol, symbol, setWatchlistId, watchId } = props;

  return (
    <svg
      onClick={() => {
        setSymbol(symbol);
        setOverlay(-2);
        setWatchlistId(watchId);
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className=" cursor-pointer"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
        stroke="#475467"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
