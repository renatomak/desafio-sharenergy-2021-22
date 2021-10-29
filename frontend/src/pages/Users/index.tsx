import { Button, Stack } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";
import UserTable from "./UserTable";

export default function FormPropsTextFields() {
  return (
    <Container>
      <h1>Dados dos Clientes</h1>
      <UserTable />
      <br />

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" href="/users/add">
          Adicionar Usuário
        </Button>
        <Button variant="contained" color="warning" href="/users/add">
          Visualizar
        </Button>
        <Button variant="contained" color="primary" href="/users/add">
          Atualizar
        </Button>
        <Button variant="contained" color="error" href="/users/add">
          Excluir
        </Button>
      </Stack>
    </Container>
  );
}
