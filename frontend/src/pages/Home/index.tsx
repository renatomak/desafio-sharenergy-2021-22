import { Button } from "components/components.styleds";
import * as React from "react";
import { CUSTOMERS, DATAANALYSIS, FINANCIALSTATEMENT } from "Routes";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <h1 className="h1-main">Economize com a Energia Solar!</h1>
      <h3>Clique nos botões abaixo e análise ou gerencie seus dados</h3>
      <a href={DATAANALYSIS}>
        <Button className="btn-main">Análise - Produção Diária</Button>
      </a>
      <a href={CUSTOMERS}>
        <Button className="btn-main">Gerenciamento de Clientes</Button>
      </a>
      <a href={FINANCIALSTATEMENT}>
        <Button className="btn-main">Demonstrativos</Button>
      </a>
    </Container>
  );
};

export default Home;
