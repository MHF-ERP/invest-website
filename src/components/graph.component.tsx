"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
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
      grid: {
        show: false,
      },
      stroke: {
        width: 2,
      },
      chart: {
        id: "area-datetime",
        type: "line",
        height: 100,
        zoom: {
          autoScaleYaxis: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        tooltip: {
          enabled: false, // disable tooltips
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        tooltip: {
          enabled: false, // disable tooltips
        },
      },
      annotations: {
        yaxis: [
          {
            y: 0,
            borderColor: "#9AFF9A",
            label: {
              show: false,
              text: "",
              style: {
                color: "#fff",
                background: "#00E396",
              },
            },
          },
        ],
        xaxis: [
          {
            x: 0,
            borderColor: "#F2F4F7",
            yAxisIndex: 0,
            label: {
              show: false,
              text: "",
              style: {
                color: "#F2F4F7",
                background: "",
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: color2, // Light green color start
              opacity: 1,
            },

            {
              offset: 100,
              color: "#FFFFFF", // Lime green color end
              opacity: 1,
            },
          ],
        },
      },
    },
    toolbar: {
      show: false,
    },

    selection: "one_year",
  });
  return (
    <div className={` w-full ${height} -mt-[${margin}px]`}>
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
