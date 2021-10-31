import React from "react";
import SherenergyContext from "store/context/context";
import { ContainerSelectCustomer } from "./styled";

export default function SelectCustomer() {
  const { customers, setCustomer, customer } = React.useContext(SherenergyContext);

  const handleChangeCustomer = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = e.target;   
    const selectedCustomer = customers.filter( item => parseInt(value) === item.numeroCliente)
    setCustomer(selectedCustomer[0]);
  };

  return (
    <ContainerSelectCustomer>
      <select
        name="numeroCliente"
        value={customer?.numeroCliente}
        id={customer?.nomeCliente}
        onChange={handleChangeCustomer}
      >
        <option value="Escolha um cliente">Escolha um cliente</option>
        {customers.map(({numeroCliente, nomeCliente}) => (
          <option key={numeroCliente} value={numeroCliente}>{nomeCliente}</option>
        ))}
      </select>
    </ContainerSelectCustomer>
  );
}
