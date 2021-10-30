import * as React from "react";
import Form from "./Form";
import { Container } from "./styled";
import UserTable from "./UserTable";

export default function FormPropsTextFields() {
  return (
    <Container>
      <Form />
      <h3>Dados dos Clientes</h3>
      <UserTable />
    </Container>
  );
}
