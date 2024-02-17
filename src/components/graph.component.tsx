"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { changeDate, formatDate2 } from "@/functions/formatDate";
// import ReactApexChart from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Garph(props: {
  height: string;
  height2: number;
  color1: string;
  color2: string;
  data: any;
  margin?: string;
}) {
  const { height, height2, color1, color2, data, margin } = props;
  const [chartData, setChartData] = useState({
    series: [
      {
        color: color1,

        data: data,
      },
    ],

    options: {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        type: "datetime",
        min: new Date(formatDate2(changeDate(new Date(), 2))).getTime(),
        tickAmount: 1,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    },

    selection: "one_year",
  });
  return (
    <div className={` w-full  ${height} ${margin}`}>
      <Chart
        options={chartData.options as any}
        series={chartData.series}
        type="area"
        height={height2}
        width={"100%"}
      />
    </div>
  );
}
