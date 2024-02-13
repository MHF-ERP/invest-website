import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import type { NextPage } from "next";

const Apex: NextPage = () => {
  const chartRef = useRef<ApexCharts>();

  useEffect(() => {
    const options: ApexCharts.ApexOptions = {
      chart: {
        height: "100%",
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
        width: 6,
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
        categories: [
          "01 February",
          "02 February",
          "03 February",
          "04 February",
          "05 February",
          "06 February",
          "07 February",
        ],
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
    };
    if (
      document.getElementById("area-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      chartRef.current = new ApexCharts(
        document.getElementById("area-chart"),
        options
      );
      chartRef.current.render();
    }

    return () => {
      // Clean up function to destroy the chart instance when the component unmounts
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <div id="area-chart" />;
};

export default Apex;
