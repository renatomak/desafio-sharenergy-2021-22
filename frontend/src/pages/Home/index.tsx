import { Button } from "components/components.styleds";
import * as React from "react";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <h1>Economize com a Energia Solar!</h1>
      <h3>
        Clique no botão abaixo e obtenha já uma cotação do seu sistema
        fotovoltaico!
      </h3>
      <a href="/dashboard">
        <Button className="btn-main">Visualizar dados</Button>
      </a>
      <a href="/users">
        <Button className="btn-main">Gerenciamento de Clientes</Button>
      </a>
    </Container>
  );
};

export default Home;
