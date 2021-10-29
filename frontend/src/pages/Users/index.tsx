import * as React from "react";
import UserTable from "./UserTable";

export default function FormPropsTextFields() {
  
  return (
    <>
      <UserTable />
      <a href="/users/add"><button>Adicionar Usuário</button></a>
    </>
  );
}
