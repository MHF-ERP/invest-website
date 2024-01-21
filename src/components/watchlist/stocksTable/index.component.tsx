import React from "react";
import Column from "./columns.component";

export default function StockTable() {
  return (
    <div
      className=" w-full  rounded-2xl border border-divider mt-4 "
      style={{ borderCollapse: "collapse" }}
    >
      <table className=" w-full ">
        <thead className=" w-full text-p">
          <tr style={{ width: "100%" }} className="  ">
            <th className=" text-start w-60 font-semibold py-4 px-8 border-b-2">
              Markets
            </th>
            <th className=" text-start w-32 font-semibold border-b-2">
              Change1D
            </th>
            <th className=" border-b-2"></th>

            <th className="w-32 border-b-2 text-start font-semibold">Short</th>
            <th className="w-32 border-b-2 text-start font-semibold">buy</th>

            <th className=" border-b-2 px-8"></th>
          </tr>
        </thead>
        <tbody className=" w-full ">
          <Column last={false} />
          {/* <hr className=" border-p w-screen" /> */}

          <Column last={true} />

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
