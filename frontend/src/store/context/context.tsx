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
  idCliente: number;
  setIdCliente: (data: number) => void;
  getNextId: number;
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
  idCliente: 0,
  setIdCliente: (data: number) => {},
  getNextId: 0,
};

const SherenergyContext = createContext<PropsClientContext>(DEFAULT_VALUE);

const SherenergyContextProvider: React.FC = ({ children }) => {
  const [clientes, setClientes] = useState(DEFAULT_VALUE.clientes);
  const [cliente, setCliente] = useState(DEFAULT_VALUE.cliente);
  const [usina, setUsina] = useState(DEFAULT_VALUE.usina);
  const [idCliente, setIdCliente] = useState(DEFAULT_VALUE.idCliente);


  const iniciarListaClientes = () => {
    setClientes(dadosClientes);
  };

  useEffect(() => {
    iniciarListaClientes();
  }, []);

  const getNextId = clientes.map((item) => item.numeroCliente).sort((a, b) => b - a)[0] + 1;

  useEffect(() => {     
    setIdCliente(getNextId);
  }, [clientes]);

  const context = {
    cliente,
    setCliente,
    clientes,
    setClientes,
    usina,
    setUsina,
    idCliente,
    setIdCliente,
    getNextId,
  };

  return (
    <SherenergyContext.Provider value={context}>
      {children}
    </SherenergyContext.Provider>
  );
};

export { SherenergyContextProvider };
export default SherenergyContext;
