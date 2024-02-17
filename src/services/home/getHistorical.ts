// https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=wQ0r8X4pv2laWgeH6ddnuKmk0vXXb4YZ&from=2023-10-01&to=2023-11-01
import { STOCKS_DATA } from "@/static/stocks";
import { API_KEY } from "../../../secrets";
import { PROFILE, historicalUrl, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
import { formatDate2 } from "@/functions/formatDate";
export async function GetHistorical(
  id: string,
  from: string,
  to: string,
  setChartData?: any,
  chartData?: any
) {
  const response = await requestService.get(
    historicalUrl + `/${id}?apikey=${API_KEY}&form=${to}&to=${from}`
  );
  const transformedArray = await response.data.historical.map((item: any) => {
    const timestamp = new Date(item.date).getTime(); // Convert date to timestamp in milliseconds
    return [timestamp, item.open]; // Return an array with timestamp and open value
  });
  console.log(formatDate2(to));
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
          min: new Date(formatDate2(to)).getTime(),
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
    });
  }
  return transformedArray;

  // return response.data.historical;
  // router.replace("/");
}
