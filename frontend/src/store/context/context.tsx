import React, { createContext, useEffect, useState } from "react";
import dadosClientes from "store/dadosClientes.json";
import { Cliente } from "types/cliente";
import { Usinas } from "types/usinas";

type PropsClientContext = {
  clientes: Cliente[];
  setClientes: (data: Cliente[]) => void;
  cliente: Cliente;
  setCliente: (data: Cliente) => void;
  usina: Usinas;
  setUsina: (data: Usinas) => void;
};

export const initialSateUsina = {
  usinaId: 0,
  percentualDeParticipacao: 0,
};

export const initialStateCliente = {
  numeroCliente: 0,
  nomeCliente: "",
  usinas: [
    initialSateUsina,
  ],
};

export const DEFAULT_VALUE = {
  clientes: [initialStateCliente],
  setClientes: (data: Cliente[]) => {},
  cliente: initialStateCliente,
  setCliente: (data: Cliente) => {},
  usina: initialSateUsina,
  setUsina: (data: Usinas) => {},
};

const SherenergyContext = createContext<PropsClientContext>(DEFAULT_VALUE);

const SherenergyContextProvider: React.FC = ({ children }) => {
  const [clientes, setClientes] = useState(DEFAULT_VALUE.clientes);
  const [cliente, setCliente] = useState(DEFAULT_VALUE.cliente);
  const [usina, setUsina] = useState(DEFAULT_VALUE.usina);

  const iniciarListaClientes = () => {
    setClientes(dadosClientes);
  };

  useEffect(() => {
    iniciarListaClientes();
  }, []);

  const context = {
    cliente,
    setCliente,
    clientes,
    setClientes,
    usina,
    setUsina,
  };

  return (
    <SherenergyContext.Provider value={context}>
      {children}
    </SherenergyContext.Provider>
  );
};

export { SherenergyContextProvider };
export default SherenergyContext;
