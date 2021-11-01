import React, { useContext } from "react";
import SelectCustomer from "./SelectCustomer";
import dadosUsina from "store/dadosUsina.json";
import {
  calculateTotalEnergyInDay,
  calculateTotalIncome,
} from "./AuxiliaryFunctions";
import { Container, Span, SpanCustomer } from "./styled";
import SherenergyContext from "store/context/context";


export default function FinancialStatement() {
  const { customer} = useContext(SherenergyContext);
  return (
    <Container>
        <h1 className="h1-main">
          Demonstração financeira
        </h1>
        <label>
          Energia gerada: <Span className ="text-primary">{calculateTotalEnergyInDay(dadosUsina)} kWh</Span>
        </label>
        <label>
          Receita Total: <Span className ="text-primary">R$ {calculateTotalIncome(dadosUsina)}</Span>
        </label>
        <SpanCustomer>
          Participação do customer:
          <div>
            <SelectCustomer /> 
            <Span id="income">R$ {(customer?.rendimento) ? customer.rendimento : "0.00"}</Span>             
          </div>
        </SpanCustomer>
    </Container>
  );
}
