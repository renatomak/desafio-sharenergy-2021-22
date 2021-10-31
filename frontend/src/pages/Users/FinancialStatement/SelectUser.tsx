import React from "react";
import SherenergyContext from "store/context/context";
import { ContainerSelectUser } from "./styled";

export default function SelectUser() {
  const { clientes, setCliente, cliente } = React.useContext(SherenergyContext);

  const handleChangeCliente = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = e.target;   
    const selectedCustomer = clientes.filter( item => parseInt(value) === item.numeroCliente)
    setCliente(selectedCustomer[0]);
  };

  return (
    <ContainerSelectUser>
      <select
        name="numeroCliente"
        value={cliente?.numeroCliente}
        id={cliente?.nomeCliente}
        onChange={handleChangeCliente}
      >
        <option value="Escolha um cliente">Escolha um cleinte</option>
        {clientes.map(({numeroCliente, nomeCliente}) => (
          <option key={numeroCliente} value={numeroCliente}>{nomeCliente}</option>
        ))}
      </select>
    </ContainerSelectUser>
  );
}
