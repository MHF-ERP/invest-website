import { IoMdAdd } from "react-icons/io";
import IconButton from "../default/iconButton.component";

export default function Header(props: {
  empty: boolean;
  setOverlay?: any;
  WithoutIcon?: boolean;
}) {
  const { empty, setOverlay, WithoutIcon } = props;
  return (
    <div className=" w-full flex items-center justify-between">
      <div className=" flex flex-col">
        <h1 className=" text-headerWatch  text-[32px] font-bold">
          {!WithoutIcon ? "My Watchlists" : "My Portfolio"}
        </h1>
        <p className=" text-[#45564B] text-[16px]">
          {!WithoutIcon
            ? "Manage your watchlist and stay updated on the stocks you need to track"
            : "Take care of your investments and keep an eye on how much money you're making."}
        </p>
      </div>
      {!WithoutIcon && (
        <div className=" flex gap-3">
          <IconButton
            text="Manage"
            color="#344054"
            bgColor="#FFFFFF"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5002 4.16667H5.8335"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6665 10H17.4998"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 10H8.33333"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 15.8333H14.1667"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="10.0002"
                  cy="10"
                  r="1.66667"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="15.8332"
                  cy="15.8333"
                  r="1.66667"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="4.16667"
                  cy="4.16667"
                  r="1.66667"
                  stroke="#344054"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            left={true}
            hide={empty}
            click={() => setOverlay(2)}
          />
          <IconButton
            text="Create Watchlist"
            color="#FFFFFF"
            bgColor="#2E644E"
            icon={<IoMdAdd className=" text-white text-[20px]" />}
            left={true}
            click={() => setOverlay(1)}
          />
        </div>
      )}
    </div>
  );
}
