import React, { createContext, useEffect, useState } from "react";
import dadosClientes from "store/dadosClientes.json";
import { Cliente } from "types/cliente";


type PropsClientContext = {
  clientes: Cliente[];
  setClientes: (data: Cliente[]) => void;
};


export const DEFAULT_VALUE = {
  clientes: [
    {
      numeroCliente: 0,
      nomeCliente: "",
      usinas: [
        {
          usinaId: 0,
          percentualDeParticipacao: 0,
        }
      ]
    }
  ],
  setClientes: (data: Cliente[]) => {},
};

const SherenergyContext = createContext<PropsClientContext>(DEFAULT_VALUE);

const SherenergyContextProvider: React.FC = ({ children }) => {
  const [clientes, setClientes] = useState(DEFAULT_VALUE.clientes);

  const iniciarListaClientes = () => {
    setClientes(dadosClientes);
  }

  useEffect(() => {
    iniciarListaClientes();
  }, []);

  return (
    <SherenergyContext.Provider
      value={{
        clientes,
        setClientes,
      }}
    >
      {children}
    </SherenergyContext.Provider>
  );
};

export { SherenergyContextProvider };
export default SherenergyContext;
