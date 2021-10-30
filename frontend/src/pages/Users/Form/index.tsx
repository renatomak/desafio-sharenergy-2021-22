import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Button } from "components/components.styleds";
import React, { useContext, useState } from "react";
import SherenergyContext from "store/context/context";
import { Cliente } from "types/cliente";
import { Usinas } from "types/usinas";

// TODO: Criar restrinções para os campos númericos. Ex: não aceitar números negativos, ou ids repetidos. 

export default function Form() {
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


  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            name="numeroCliente"
            value={cliente.numeroCliente}
            id="numeroCliente"
            label="Número do Cliente"
            type="number"
            onChange={(event) =>
              setCliente({ ...cliente, numeroCliente: parseInt(event.target.value) })
            }
          />
          <TextField
            name="nomeCliente"
            value={cliente.nomeCliente}
            id="nomeCliente"
            label="Nome"
            type="text"
            onChange={(event) =>
              setCliente({ ...cliente, nomeCliente: event.target.value })
            }
          />
        </div>

        <div>
          <TextField
            name="usinaId"
            value={usina.usinaId}
            id="usinaId"
            label="Código da Usina"
            type="number"
            onChange={(event) =>
              setUsina({ ...usina, usinaId: parseInt(event.target.value) })
            }
          />
          <TextField
            name="percentualDeParticipacao"
            value={usina.percentualDeParticipacao}
            id="percentualDeParticipacao"
            label="Percentual de participacao"
            type="number"
            onChange={(event) =>
              setUsina({
                ...usina,
                percentualDeParticipacao: parseInt(event.target.value),
              })
            }
          />
        </div>
      </Box>

      <Button className="btn-main" onClick={() => setClientes([...clientes, cliente])}>
        Cadastrar
      </Button>
    </>
  );
}
