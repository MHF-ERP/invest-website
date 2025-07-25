// https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=wQ0r8X4pv2laWgeH6ddnuKmk0vXXb4YZ&from=2023-10-01&to=2023-11-01
import { API_KEY } from "../../../secrets";
import { PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
import { formatDate2 } from "@/functions/formatDate";
export async function GetHistorical(
  id: string,
  from: string,
  to: string,
  to2: string,
  link: string,

  setChartData?: any,
  chartData?: any
) {
  const response = await requestService.get(
    link + `/${id}?from=${to2}&to=${to}&apikey=${API_KEY}`
  );
  console.log(response);
  const minVal = link.includes("historical-price-full")
    ? response.data.historical.reduce((min: any, person: any) => {
        if (person.date >= from) {
          return Math.min(min, person.close);
        }
        return min;
      }, Number.MAX_VALUE) // Initialize with Number.MAX_VALUE
    : response.data.reduce((min: any, person: any) => {
        if (person.date >= from) {
          return Math.min(min, person.close);
        }
        return min;
      }, Number.MAX_VALUE);
  console.log(minVal);
  const transformedArray = link.includes("historical-price-full")
    ? await response.data.historical.map((item: any) => {
        const timestamp = new Date(item.date).getTime(); // Convert date to timestamp in milliseconds
        return [timestamp, item.close]; // Return an array with timestamp and open value
      })
    : await response.data.map((item: any) => {
        const timestamp = new Date(item.date).getTime(); // Convert date to timestamp in milliseconds
        return [timestamp, item.close]; // Return an array with timestamp and open value
      });
  const date = new Date(from);
  console.log(new Date(date).getTime());
  if (transformedArray && chartData) {
    setChartData({
      ...chartData,

      series: [
        {
          color: "#2E644E",

          data: transformedArray,
        },
      ],
      options: {
        stroke: {
          width: 2,
        },
        chart: {
          id: "area-datetime",
          type: "area",
          height: 2050,
          zoom: {
            autoScaleYaxis: true,
          },
        },

        annotations: {
          yaxis: [
            {
              y: 0,
              borderColor: "#9AFF9A",
              tickAmount: 100, // Increase this value to add more ticks and increase the distance between lines

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
              tooltip: {
                enabled: false, // disable tooltips
              },
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
          min: minVal,
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false, // disable tooltips
          },
          tickAmount: 5, // Increase this value to add more ticks and increase the distance between lines
        },
        markers: {
          size: 0,
          style: "hollow",
        },
        xaxis: {
          type: "datetime",
          min: new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + 2,
            10,
            0,
            0
          ).getTime(),
          tickAmount: 10,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
          tickAmount: 15, // Increase this value to add more ticks and increase the distance between lines
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
    });
  }
  return transformedArray;

  // return response.data.historical;
  // router.replace("/");
}
