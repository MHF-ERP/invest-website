import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import ReactApexChart from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function HandelDynamicGraph(props: { chartData: any }) {
  const { chartData } = props;
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(typeof window !== "undefined");
  }, []);
  if (!hasWindow) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Chart
        options={chartData.options as any}
        series={chartData.series}
        type="area"
        height={250}
        width={"100%"}
      />
    </div>
  );
}
