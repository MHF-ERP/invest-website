import React from "react";

const Card = ({ name, change, price, short }: any) => {
  return (
    <div
      className={` flex  w-full  justify-between bg-white p-4 rounded-lg shadow-md ${
        short ? "col-span-2" : ""
      }`}
    >
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-500 mb-2">Change: {change}</p>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
          short ? "float-right" : "hidden md:block"
        }`}
      >
        {short}
      </button>
    </div>
  );
};

export default Card;
