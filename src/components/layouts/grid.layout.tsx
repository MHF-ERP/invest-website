import React from "react";

const GridLayout = ({ children }: any) => {
  return (
    <div className=" w-full mx-auto p-4">
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default GridLayout;
