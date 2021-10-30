import { Button, Stack, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useContext, useEffect, useState } from "react";
import SherenergyContext from "store/context/context";
import { Cliente } from "types/cliente";
import { Usinas } from "types/usinas";
import { Container } from "./styled";

// TODO: Criar restrinções para os campos númericos. Ex: não aceitar números negativos, ou ids repetidos. 

export default function Form(this: any) {
  const [usina, setUsina] = useState<Usinas>({
    usinaId: 0,
    percentualDeParticipacao: 0,
  });

  const [cliente, setCliente] = useState<Cliente>({
    numeroCliente: 0,
    nomeCliente: "",
    usinas: [usina],
  });

  const { clientes, setClientes } = useContext(SherenergyContext);

  console.log('TESTANDO O CONTEXT: ', clientes);


  useEffect(() => {
    setCliente({...cliente, usinas: [usina]})
  }, [usina]);

  const handleChangeCliente = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {value, name} = e.target;
    setCliente({ ...cliente, [name]: value })
  }

  const handleChangeUsina = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {value, name} = e.target;
    setUsina({ ...usina, [name]: value })
  }

  const addCliente = (): void => {
    setClientes([...clientes, cliente]);
    console.log(cliente)
    console.log(clientes)
  }

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
      >
        <Stack direction="row" spacing={2}>
          <TextField
            name="numeroCliente"
            value={cliente.numeroCliente}
            id="numeroCliente"
            label="Número do Cliente"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCliente(e)}
          />
          <TextField
            name="nomeCliente"
            value={cliente.nomeCliente}
            id="nomeCliente"
            label="Nome"
            type="text"
            onChange={handleChangeCliente}
          />
          <TextField
            name="usinaId"
            value={usina.usinaId}
            id="usinaId"
            label="Código da Usina"
            type="number"
            onChange={handleChangeUsina}
          />
          <TextField
            name="percentualDeParticipacao"
            value={usina.percentualDeParticipacao}
            id="percentualDeParticipacao"
            label="Percentual de participacao"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeUsina(e)}
          />
        </Stack>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={addCliente}>
          Adicionar
        </Button>
        <Button variant="contained" color="warning" href="/users/user">
          Visualizar
        </Button>
        <Button variant="contained" color="primary" href="/users/user">
          Atualizar
        </Button>
        <Button variant="contained" color="error" href="/users/user">
          Excluir
        </Button>
      </Stack>
    </Container>
  );
}
