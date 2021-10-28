import React, { useEffect, useState } from "react";
import dadosUsina from "store/dadosUsina.json";
import Chart from "react-apexcharts";
import ComponentCheckbox from "./RowRadioButtonsGroup";
import { red } from "@material-ui/core/colors";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

const BarChart = () => {
  const [userChoice, setUserChoice] = useState("tensao");
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  const getDatas = (variavel: string): void => {
    const myData = dadosUsina.map((item) => {
      if (variavel === "corrente") return Number(item.corrente_A.toFixed(2));
      if (variavel === "potencia") return Number(item.potencia_kW.toFixed(2));
      if (variavel === "temperatura")
        return Number(item.temperatura_C.toFixed(2));
      return Number(item.tensao_V.toFixed(2));
    });

    setChartData({
      labels: {
        categories: dadosUsina.map(
          (item) => item.tempo_h.toFixed(2).replace(".", "h ") + "m"
        ),
      },
      series: [
        {
          name: variavel,
          data: myData,
        },
      ],
    });
  };

  useEffect(() => {
    getDatas(userChoice);
  }, [userChoice]);

  return (
    <>
      <ComponentCheckbox choice={setUserChoice} />
      <Chart
        options={{ ...options, xaxis: chartData.labels }}
        series={chartData.series}
        type="area"
        height="390"
        width="1200"
        style={{color: 'green'}}
      />
    </>
  );
};

export default BarChart;
