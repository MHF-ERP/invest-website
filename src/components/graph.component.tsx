"use client";
import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { changeDate, formatDate2 } from "@/functions/formatDate";

// Avoid SSR for Chart
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

  const xMin = useMemo(() => {
    // Ensure it's run only on client
    if (typeof window === "undefined") return undefined;
    return new Date(formatDate2(changeDate(new Date(), 2))).getTime();
  }, []);

  const chartOptions = useMemo(() => {
    return {
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
          data: data,
          color: color1,
        },
      ],
      xaxis: {
        type: "datetime",
        min: xMin,
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
    };
  }, [data, color1, xMin]);

  if (typeof window === "undefined" || xMin === undefined) return null; // prevent SSR render

  return (
    <div className={`w-full ${height} ${margin}`}>
      <Chart
        options={chartOptions as any}
        series={[{ data, color: color1 }]}
        type="area"
        height={height2}
        width="100%"
      />
    </div>
  );
}
