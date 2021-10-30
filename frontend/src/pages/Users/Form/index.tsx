import { Button, Stack, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useContext, useEffect } from "react";
import SherenergyContext, {
  initialSateUsina,
  initialStateCliente,
} from "store/context/context";
import { Container } from "./styled";

export default function Form(this: any) {
  const {
    clientes,
    setClientes,
    cliente,
    setCliente,
    usina,
    setUsina,
    idCliente,
    getNextId,
    setIdCliente,
  } = useContext(SherenergyContext);

  console.log("ID: ", idCliente);

  useEffect(() => {
    setCliente({ ...cliente, usinas: [usina], numeroCliente: idCliente });
  }, [usina]);

  const handleChangeCliente = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleChangeUsina = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setUsina({ ...usina, [name]: value });
  };

  const addCliente = (): void => {
    setClientes([...clientes, cliente]);
    clearInputs();
  };

  const updateCliente = (): void => {
    const listClientes = clientes.filter((item) => cliente.numeroCliente !== item.numeroCliente);
    const newListClientes = [cliente, ...listClientes].sort((a, b) => a.numeroCliente - b.numeroCliente);

    setClientes(newListClientes);
    clearInputs();
  };

  const clearInputs = (): void => {
    setCliente(initialStateCliente);
    setUsina(initialSateUsina);
    setIdCliente(getNextId);
  };

  const deleteCliente = (): void => {
    console.log(cliente);
    const listClientes = clientes.filter((item) => cliente.numeroCliente !== item.numeroCliente);
    setClientes(listClientes);
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
            value={idCliente}
            id="numeroCliente"
            label="Número do Cliente"
            type="number"
            disabled
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeCliente(e)
            }
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
            value={usina.usinaId >= 0 ? usina.usinaId : 0}
            id="usinaId"
            label="Código da Usina"
            type="number"
            onChange={handleChangeUsina}
          />
          <TextField
            name="percentualDeParticipacao"
            value={
              usina.percentualDeParticipacao >= 0
                ? usina.percentualDeParticipacao
                : 0
            }
            id="percentualDeParticipacao"
            label="Percentual de participacao"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeUsina(e)
            }
          />
        </Stack>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="warning" onClick={clearInputs}>
          Limpar
        </Button>
        <Button variant="contained" color="success" onClick={addCliente}>
          Adicionar
        </Button>
        <Button variant="contained" color="primary" onClick={updateCliente}>
          Atualizar
        </Button>
        <Button variant="contained" color="error" onClick={deleteCliente}>
          Excluir
        </Button>
      </Stack>
    </Container>
  );
}
