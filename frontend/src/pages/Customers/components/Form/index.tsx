import { Button, Stack, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useContext, useEffect } from "react";
import SharenergyContext, {
  initialSateUsina,
  initialStateCliente,
} from "store/context/context";
import {
  fetchCreateCustomer,
  fetchDeleteCustomer,
  fetchUpdateCustomer,
} from "store/requests";
import { Container } from "./styled";

export default function Form(this: any) {
  const {
    customer,
    setCustomer,
    usina,
    setUsina,
    idCustomer,
    getNextId,
    setIdCustomer,
    updateListCustomers,
  } = useContext(SharenergyContext);

  useEffect(() => {
    setCustomer({ ...customer, usinas: [usina], numeroCliente: idCustomer });
  }, [usina]);

  const handleChangeCliente = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleChangeUsina = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { value } = e.target;

    setUsina({
      percentualDeParticipacao: parseInt(value),
      usinaId: 1,
    });
    setCustomer({ ...customer, usinas: [usina], numeroCliente: idCustomer });
  };

  const addCliente = async () => {
    const { numeroCliente, nomeCliente, nomeUsuario, password, usinas } =
      customer;

    const newCustomer = {
      numeroCliente,
      nomeCliente,
      nomeUsuario,
      password,
      usinas,
    };

    await fetchCreateCustomer(newCustomer);
    await updateListCustomers();
    clearInputs();
  };

  const updateCliente = async () => {
    const { _id } = customer;

    await fetchUpdateCustomer(_id, customer);
    await updateListCustomers();
    clearInputs();
  };

  const clearInputs = (): void => {
    setCustomer(initialStateCliente);
    setUsina(initialSateUsina);
    setIdCustomer(getNextId);
  };

  const deleteCliente = async () => {
    const { _id } = customer;
    await fetchDeleteCustomer(_id);
    await updateListCustomers();
    clearInputs();
    setIdCustomer(getNextId - 1);
  };

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
            value={idCustomer || 1}
            id="numeroCliente"
            label="Número do Customer"
            type="number"
            disabled
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeCliente(e)
            }
          />
          <TextField
            name="nomeCliente"
            value={customer.nomeCliente}
            id="nomeCliente"
            label="Nome"
            type="text"
            onChange={handleChangeCliente}
          />
          <TextField
            name="nomeUsuario"
            value={customer.nomeUsuario}
            id="nomeUsuario"
            label="Nome de usuário"
            type="text"
            onChange={handleChangeCliente}
          />
          <TextField
            name="password"
            value={customer.password}
            id="password"
            label="senha"
            type="password"
            onChange={handleChangeCliente}
          />
          <TextField
            name="usinaId"
            value={usina.usinaId >= 1 ? usina.usinaId : 1}
            id="usinaId"
            label="Código da Usina"
            type="number"
            onChange={handleChangeUsina}
            disabled
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
