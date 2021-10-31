import * as React from "react";
import Form from "./Form";
import { Container } from "./styled";
import UserTable from "./UserTable";

export default function FormPropsTextFields() {

  return (
    <Container>
      <h1 className="h1-main">Dados dos Clientes</h1>
      <Form />
      <UserTable />
    </Container>
  );
}
