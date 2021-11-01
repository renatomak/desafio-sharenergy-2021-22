import React from "react";
import { Customer } from "types/customer";
import { CardContainer, DivCustomer } from "./styled";

const Card = (props: { customer: Customer; }) => {
  const {customer} = props;
  const { usinas } = customer;

  return (
    <CardContainer>
        <DivCustomer>
          <span>{customer.nomeCliente}</span>
          <span id="percentage">{usinas[0].percentualDeParticipacao} %</span>
        </DivCustomer>

        <span>R$ {customer.rendimento}</span>
    </CardContainer>
  );
};

export default Card;
