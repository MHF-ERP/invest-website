import React, { useEffect, useState } from "react";
import HandelDynamicGraph from "./handelDynamicGraph";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetHistorical } from "@/services/home/getHistorical";
import { usePathname } from "next/navigation";
import { changeDate, formatDate } from "@/functions/formatDate";
import {
  historicalUrl1Month,
  historicalUrl1Year,
  historicalUrl5Days,
  historicalUrl5Year,
} from "@/static/links";

export default function DateTimeChart(props: { title: string }) {
  const { title } = props;

  const [chartData, setChartData] = useState({
    series: [
      {
        color: "#2E644E",

        data: [],
      },
    ],
    options: {
      stroke: {
        width: 2,
      },
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
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
              show: true,
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
      yaxis: {
        labels: {
          show: false,
        },
        tooltip: {
          enabled: false, // disable tooltips
        },
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Jan 2012").getTime(),
        tickAmount: 1,
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
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
              color: "#2E644E", // Light green color start
              opacity: 1,
            },

            {
              offset: 100,
              color: "#FFFFFF", // Lime green color end
              opacity: 0,
            },
          ],
        },
      },
    },
    toolbar: {
      show: true,
    },

    selection: "five_days",
  });
  function updateData(timeline: any) {
    setChartData({ ...chartData, selection: timeline });

    switch (timeline) {
      case "five_days":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000).getTime()
        );
      case "one_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).getTime()
        );
        break;
      case "three_months":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(
            new Date().getTime() - 3 * 30 * 24 * 60 * 60 * 1000
          ).getTime()
        );
        break;

      case "one_year":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(
            new Date().getTime() - 12 * 30 * 24 * 60 * 60 * 1000
          ).getTime()
        );
        break;
      case "three_year":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(
            new Date().getTime() - 3 * 12 * 30 * 24 * 60 * 60 * 1000
          ).getTime()
        );
        break;
      case "five_year":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(
            new Date().getTime() - 5 * 12 * 30 * 24 * 60 * 60 * 1000
          ).getTime()
        );
        break;

      default:
    }
  }

  const [from, setFrom] = useState<string>(formatDate(new Date()));
  const [to, setTo] = useState<string>(changeDate(new Date(), 5));

  const pathName = usePathname();
  const today = new Date();

  today.setDate(today.getDate() - 5);

  // Format as "YYYY-MM-DD"
  let formattedDate = today.toISOString().split("T")[0];
  let toformattedDate = new Date().toISOString().split("T")[0];

  const mutation = useMutation({
    mutationFn: (e) => {
      return GetHistorical(
        pathName.split("/").pop()!,
        to,
        from,
        chartData.selection === "five_days"
          ? historicalUrl5Days
          : chartData.selection === "one_month"
          ? historicalUrl1Month
          : chartData.selection === "three_months" ||
            chartData.selection === "one_year"
          ? historicalUrl1Year
          : historicalUrl5Year,
        setChartData,
        chartData
      );
    },
  });
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Historical"],
    queryFn: () =>
      GetHistorical(
        pathName.split("/").pop()!,
        formattedDate,
        toformattedDate,
        chartData.selection === "five_days"
          ? historicalUrl5Days
          : chartData.selection === "one_month"
          ? historicalUrl1Month
          : chartData.selection === "three_months" ||
            chartData.selection === "one_year"
          ? historicalUrl1Year
          : historicalUrl5Year,
        setChartData,
        chartData
      ),

    enabled: false,
  });
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div
      id="chart"
      className=" border border-divider p-[21px]  shadow rounded-xl flex-1"
    >
      <h1 className=" font-bold text-main text-[16px]">{title}</h1>
      <div className="flex xl:gap-4 lg:gap-4 md:gap-4 -mb-2 pt-[20px]">
        <button
          id="five_days"
          onClick={() => {
            const date = new Date();
            setFrom(formatDate(date));
            setTo(changeDate(date, 5));
            mutation.mutate();
            updateData("five_days");
          }}
          className={`${
            chartData.selection === "five_days"
              ? "bg-[#E7E7E7] text-main font-bold"
              : "text-placeholer font-semibold "
          }    xl:p-4 lg:p-4 md:p-4 p-2 h-fit rounded-xl cursor-pointer`}
        >
          5D
        </button>
        <button
          id="one_month"
          onClick={() => {
            const date = new Date();
            setFrom(formatDate(date));
            setTo(changeDate(date, 30));
            mutation.mutate();

            updateData("one_month");
          }}
          className={`${
            chartData.selection === "one_month"
              ? "bg-[#E7E7E7] text-main font-bold"
              : "text-placeholer font-semibold "
          }    xl:p-4 lg:p-4 md:p-4 p-2 h-fit rounded-xl cursor-pointer`}
        >
          1M
        </button>

        <button
          id="three_months"
          onClick={() => {
            const date = new Date();
            setFrom(formatDate(date));
            setTo(changeDate(date, 3 * 30));
            mutation.mutate();
            updateData("three_months");
          }}
          className={`${
            chartData.selection === "three_months"
              ? "bg-[#E7E7E7] text-main font-bold"
              : "text-placeholer font-semibold "
          }    xl:p-4 lg:p-4 md:p-4 p-2 h-fit rounded-xl cursor-pointer`}
        >
          3M
        </button>

        <button
          id="one_year"
          onClick={() => {
            const date = new Date();
            setFrom(formatDate(date));
            setTo(changeDate(date, 12 * 30));
            mutation.mutate();

            updateData("one_year");
          }}
          className={`${
            chartData.selection === "one_year"
              ? "bg-[#E7E7E7] text-main font-bold"
              : "text-placeholer font-semibold "
          }    xl:p-4 lg:p-4 md:p-4 p-2 h-fit rounded-xl cursor-pointer`}
        >
          1Y
        </button>
        <button
          id="three_year"
          onClick={() => {
            const date = new Date();
            setFrom(formatDate(date));
            setTo(changeDate(date, 3 * 12 * 30));
            mutation.mutate();
            updateData("three_year");
          }}
          className={`${
            chartData.selection === "three_year"
              ? "bg-[#E7E7E7] text-main font-bold"
              : "text-placeholer font-semibold "
          }    xl:p-4 lg:p-4 md:p-4 p-2 h-fit rounded-xl cursor-pointer`}
        >
          3Y
        </button>
        <button
          id="five_year"
          onClick={() => {
            const date = new Date();
            setFrom(formatDate(date));
            setTo(changeDate(date, 5 * 12 * 30));
            mutation.mutate();
            updateData("five_year");
          }}
          className={`${
            chartData.selection === "five_year"
              ? "bg-[#E7E7E7] text-main font-bold"
              : "text-placeholer font-semibold "
          }    xl:p-4 lg:p-4 md:p-4 p-2 h-fit rounded-xl cursor-pointer`}
        >
          5Y
        </button>
      </div>

      <div id="chart-timeline">
        <HandelDynamicGraph chartData={chartData} />
      </div>
    </div>
  );
}
