import React, { useContext } from "react";
import SelectUser from "./SelectUser";
import dadosUsina from "store/dadosUsina.json";
import {
  calculateTotalEnergyInDay,
  calculateTotalIncome,
} from "./AuxiliaryFunctions";
import { Container, SpanUser } from "./styled";
import SherenergyContext from "store/context/context";


export default function FinancialStatement() {
  const { cliente} = useContext(SherenergyContext);
  return (
    <Container>
        <h1 className="h1-main">
          Demonstração financeira
        </h1>
        <label>
          Energia gerada: <span>{calculateTotalEnergyInDay(dadosUsina)}</span>
        </label>
        <label>
          Receita Total: <span>{calculateTotalIncome(dadosUsina)}</span>
        </label>
        <SpanUser>
          Participação do cliente:
          <div>
            <SelectUser /> 
            <span>{(cliente?.rendimento) ? cliente.rendimento : "0.00"}</span>             
          </div>
        </SpanUser>
    </Container>
  );
}
