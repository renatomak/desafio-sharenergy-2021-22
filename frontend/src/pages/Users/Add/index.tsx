import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Button } from "components/components.styleds";
import React, { useEffect, useState } from "react";
import { Cliente } from "types/cliente";
import { User } from "types/user";
import { Usinas } from "types/usinas";


export default function AddUser() {
  const [user, setUser] = useState<User>({
    numeroCliente: 0,
    nomeCliente: "",
  });

  const [usina, setUsina] = useState<Usinas>({
    usinaId: 0,
    percentualDeParticipacao: 0,
  });

  const [cliente, setCliente] = useState<Cliente>({
    user: user,
    usinas: [usina],
  });

  useEffect(() => {
    setCliente({ user, usinas: [ usina ] });
  }, [user, usina]);

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
            value={user.numeroCliente}
            id="numeroCliente"
            label="Número do Cliente"
            type="number"
            onChange={(event) =>
              setUser({ ...user, numeroCliente: parseInt(event.target.value) })
            }
          />
          <TextField
            name="nomeCliente"
            value={user.nomeCliente}
            id="nomeCliente"
            label="Nome"
            type="text"
            onChange={(event) =>
              setUser({ ...user, nomeCliente: event.target.value })
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

      <Button className="btn-main" onClick={() => console.log(cliente)}>
        Cadastrar
      </Button>
    </>
  );
}
