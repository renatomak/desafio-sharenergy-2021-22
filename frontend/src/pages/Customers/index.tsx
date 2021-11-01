import * as React from "react";
import Form from "./components/Form";
import { Container, DivFormChart } from "./styled";
import UserTable from "./components/UserTable";

export default function FormPropsTextFields() {
  return (
    <Container>
      <h1 className="h1-main">Clientes</h1>
      <DivFormChart>
        <Form />
        <UserTable />
      </DivFormChart>
    </Container>
  );
}
