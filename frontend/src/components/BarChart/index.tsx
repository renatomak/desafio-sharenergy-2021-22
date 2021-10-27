import React, { useEffect, useState } from 'react';
import dadosUsina from "store/dadosUsina.json";
import Chart from "react-apexcharts";


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

  console.log(dadosUsina)

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };


   const getDatas = (userChoice = "tensao_V"): void => {
     const myData = dadosUsina.map((item) => {
       if (userChoice === "corrente_A") return  Number(item.corrente_A.toFixed(2));
       if (userChoice === "potencia_kW") return  Number(item.potencia_kW.toFixed(2));
       if (userChoice === "temperatura_C") return  Number(item.temperatura_C.toFixed(2));
       
       return  Number(item.tensao_V.toFixed(2));
     });
     
      setChartData({
        labels: {
          categories: dadosUsina.map((item) => item.tempo_h.toFixed(2)),
        },
        series: [
          {
            name: userChoice,
            data: myData,
          },
        ],
      });
  };

  useEffect(() => {
    getDatas();
  }, []);


  return (
      <Chart
        options={{ ...options, xaxis: chartData.labels }}
        series={chartData.series}
        type="area"
        height="390"
        width="1200"
      />
  );
};

export default BarChart;
