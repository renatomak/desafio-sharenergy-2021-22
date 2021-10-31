import React from "react";
import dadosUsina from "store/dadosUsina.json";

const FinancialFeedback = () => {
    const listTempoPotencia = dadosUsina.map(({ tempo_h, potencia_kW}) => {
        const newItem = { tempo_h, potencia_kW };
        return newItem;
    });

    //const listTempo = listTempoPotencia.map(item => Math.round((item.tempo_h + Number.EPSILON)*100)/100).sort((a, b) => a - b);
    const listTempo = listTempoPotencia.map(({ tempo_h }) => {
        const tempo = String(tempo_h);
        const minutos = tempo.substr(tempo.indexOf('.')+1, tempo.length);
        const horas = tempo.substr(0, tempo.indexOf('.'));
        console.log(horas, minutos);

        return tempo_h;
    });


    console.log(listTempo)

    // for (let i = 1; i < listTempo.length; i++){
    //     const delta = listTempo[i] - listTempo[i-1];
    //     console.log(delta);
    // }
  return (
    <div>
      <h1>Retorno Financeiro</h1>
    </div>
  );
};

export default FinancialFeedback;
