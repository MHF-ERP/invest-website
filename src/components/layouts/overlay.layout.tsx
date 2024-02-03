import React from "react";

const OverlayLayout = ({ children }: any) => {
  return (
    <div className=" w-screen h-screen bg-[#1F332B] absolute top-0 left-0 opacity-15 z-40">
      <div className="flex flex-col bg-white w-64 h-32">{children}</div>
    </div>
  );
};

export default OverlayLayout;
