import React, { useContext } from "react";
import SharenergyContext from "store/context/context";
import dadosUsina from "store/dadosUsina.json";
import { CardContainer } from "./Card/styled";
import { Container, MainContainer } from "./styled";
import Card from "./Card";
import {
  calculateTotalEnergyInDay,
  calculateTotalIncome,
} from "../../../../util/AuxiliaryFunctions";

export default function FinancialStatement() {
  const { customers } = useContext(SharenergyContext);

  return (
    <MainContainer>
      <CardContainer className="bg-primary">
        <label>
          Energia gerada:{" "}
          <span className="text-results">
            {calculateTotalEnergyInDay(dadosUsina)} kWh
          </span>
        </label>
      </CardContainer>

      <CardContainer className="bg-primary">
        <label>
          Receita Total:{" "}
          <span className="text-results">
            R$ {calculateTotalIncome(dadosUsina)}
          </span>
        </label>
      </CardContainer>

      <Container>
        {customers?.map((item: any, index: React.Key | null | undefined) => (
          <Card customer={item} key={index} />
        ))}
      </Container>
    </MainContainer>
  );
}
