import React, { useEffect, useState } from "react";
import dadosUsina from "store/dadosUsina.json";
import Chart from "react-apexcharts";
import ComponentCheckbox from "./RowRadioButtonsGroup";
import { ContainerChart } from "./styled";

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

const AreaChart = () => {
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

    // TODO: FONTE: https://qastack.com.br/programming/11832914/round-to-at-most-2-decimal-places-only-if-necessary

    const convertHoursIntoMinutes = (value: string): number => {
      const horas = value.substr(0, value.indexOf("."));
      const str = value.replace(horas, "0");
      const minutos = Math.round(
        ((parseFloat(str) * 60 + Number.EPSILON) * 100) / 100
      );
      return minutos;
    };

    setChartData({
      labels: {
        categories: dadosUsina.map(({ tempo_h }) => {
          const tempo = String(tempo_h);

          if (tempo.includes(".")) {
            const horas = tempo.substr(0, tempo.indexOf("."));
            const minutos = convertHoursIntoMinutes(tempo);
            return `${horas}h ${minutos}m`;
          }

          return `${tempo}h 00m`;
        }),
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
      <ContainerChart>
        <h3 className="text-primary">Produção diária da usina</h3>
        <Chart
          options={{ ...options, xaxis: chartData.labels }}
          series={chartData.series}
          type="area"
          height="390"
          width="1200"
          style={{ color: "green" }}
        />
      </ContainerChart>
    </>
  );
};

export default AreaChart;
