import React, { createContext, useEffect, useState } from "react";
import dadosClientes from "store/dadosClientes.json";
import dadosUsina from "store/dadosUsina.json";

import { Customer } from "types/customer";
import { Usina } from "types/usina";
import { customerDailyIncome } from "../../util/AuxiliaryFunctions";
import { fetchGetAllCustomers } from "../requests";

type PropsClientContext = {
  customers: Customer[];
  setCustomers: (data: Customer[]) => void;
  customer: Customer;
  setCustomer: (data: Customer) => void;
  usina: Usina;
  setUsina: (data: Usina) => void;
  idCustomer: number;
  setIdCustomer: (data: number) => void;
  getNextId: number;
};

export const initialSateUsina = {
  usinaId: 0,
  percentualDeParticipacao: 0,
};

export const initialStateCliente = {
  numeroCliente: 0,
  nomeCliente: "",
  nomeUsuario: "",
  password: "",
  rendimento: 0,
  usinas: [initialSateUsina],
};

export const DEFAULT_VALUE = {
  customers: [initialStateCliente],
  setCustomers: (data: Customer[]) => {},
  customer: initialStateCliente,
  setCustomer: (data: Customer) => {},
  usina: initialSateUsina,
  setUsina: (data: Usina) => {},
  idCustomer: 0,
  setIdCustomer: (data: number) => {},
  getNextId: 0,
};

const SharenergyContext = createContext<PropsClientContext>(DEFAULT_VALUE);

const SharenergyContextProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState(DEFAULT_VALUE.customers);
  const [customer, setCustomer] = useState(DEFAULT_VALUE.customer);
  const [usina, setUsina] = useState(DEFAULT_VALUE.usina);
  const [idCustomer, setIdCustomer] = useState(DEFAULT_VALUE.idCustomer);

  const iniciarListaClientes = async () => {
    const getAllCustomers = await fetchGetAllCustomers();
    console.log("GETCUSTOMERS: ", getAllCustomers);
    const customers = getAllCustomers.map((item: Customer) => {
      const newCustomer = { ...item, rendimento: 0 };
      return newCustomer;
    });
    const NewCustomers = customerDailyIncome(1, dadosUsina, customers);
    setCustomers(NewCustomers);
  };

  useEffect(() => {
    iniciarListaClientes();
  }, []);

  const getNextId =
    customers.map((item) => item.numeroCliente).sort((a, b) => b - a)[0] + 1;

  useEffect(() => {
    setIdCustomer(getNextId);
  }, [customers, getNextId]);

  const context = {
    customer,
    setCustomer,
    customers,
    setCustomers,
    usina,
    setUsina,
    idCustomer,
    setIdCustomer,
    getNextId,
  };

  return (
    <SharenergyContext.Provider value={context}>
      {children}
    </SharenergyContext.Provider>
  );
};

export { SharenergyContextProvider };
export default SharenergyContext;
