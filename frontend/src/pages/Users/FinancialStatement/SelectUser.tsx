import React from "react";
import SherenergyContext from "store/context/context";
import { ContainerSelectUser } from "./styled";

export default function SelectUser() {
  const { customers, setCustomer, customer } = React.useContext(SherenergyContext);

  const handleChangeCliente = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = e.target;   
    const selectedCustomer = customers.filter( item => parseInt(value) === item.numeroCliente)
    setCustomer(selectedCustomer[0]);
  };

  return (
    <ContainerSelectUser>
      <select
        name="numeroCliente"
        value={customer?.numeroCliente}
        id={customer?.nomeCliente}
        onChange={handleChangeCliente}
      >
        <option value="Escolha um customer">Escolha um cleinte</option>
        {customers.map(({numeroCliente, nomeCliente}) => (
          <option key={numeroCliente} value={numeroCliente}>{nomeCliente}</option>
        ))}
      </select>
    </ContainerSelectUser>
  );
}
