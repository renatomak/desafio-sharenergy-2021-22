import { Button, Stack, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useContext, useEffect } from "react";
import SharenergyContext, {
  initialSateUsina,
  initialStateCliente,
} from "store/context/context";
import { Container } from "./styled";

export default function Form(this: any) {
  const {
    customers,
    setCustomers,
    customer,
    setCustomer,
    usina,
    setUsina,
    idCustomer,
    getNextId,
    setIdCustomer,
  } = useContext(SharenergyContext);

  console.log("ID: ", idCustomer);

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
    const { value, name } = e.target;
    setUsina({ ...usina, [name]: value });
  };

  const addCliente = (): void => {
    setCustomers([...customers, customer]);
    clearInputs();
  };

  const updateCliente = (): void => {
    const listClientes = customers.filter(
      (item) => customer.numeroCliente !== item.numeroCliente
    );
    const newListClientes = [customer, ...listClientes].sort(
      (a, b) => a.numeroCliente - b.numeroCliente
    );

    setCustomers(newListClientes);
    clearInputs();
  };

  const clearInputs = (): void => {
    setCustomer(initialStateCliente);
    setUsina(initialSateUsina);
    setIdCustomer(getNextId);
  };

  const deleteCliente = (): void => {
    console.log(customer);
    const listClientes = customers.filter(
      (item) => customer.numeroCliente !== item.numeroCliente
    );
    setCustomers(listClientes);
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
            value={idCustomer}
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
            name="usinaId"
            value={usina.usinaId >= 1 ? usina.usinaId : 1}
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
