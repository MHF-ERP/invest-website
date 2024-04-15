import React from "react";

export default function HomeLayout({
  overlay,
  children,
}: {
  overlay?: any;
  children: React.ReactNode;
}) {
  return (
    <div
      className={` ${
        overlay && "over"
      } bg-white  rounded-tl-3xl mt-4 p-6 w-full overflow-y-auto flex-1 gap-[20px] flex flex-col `}
    >
      {children}
    </div>
  );
}
