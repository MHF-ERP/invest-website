import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-white  rounded-tl-3xl mt-4 p-6 w-full overflow-y-auto flex-1 ">
      {children}
    </div>
  );
}
