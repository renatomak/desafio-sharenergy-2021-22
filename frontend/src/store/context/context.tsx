import React, { createContext, useEffect, useState } from "react";
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
  updateListCustomers: Function;
};

export const initialSateUsina = {
  usinaId: 0,
  percentualDeParticipacao: 0,
};

export const initialStateCliente = {
  _id: "",
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
  idCustomer: 1,
  updateListCustomers: Function,
};

const SharenergyContext = createContext<PropsClientContext>(DEFAULT_VALUE);

const SharenergyContextProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState(DEFAULT_VALUE.customers);
  const [customer, setCustomer] = useState(DEFAULT_VALUE.customer);
  const [usina, setUsina] = useState(DEFAULT_VALUE.usina);
  const [idCustomer, setIdCustomer] = useState(DEFAULT_VALUE.idCustomer);

  const updateListCustomers = async () => {
    const getAllCustomers = await fetchGetAllCustomers();

    const customers = getAllCustomers.map((item: Customer) => {
      const newCustomer = { ...item, rendimento: 0 };
      return newCustomer;
    });

    const NewCustomers = customerDailyIncome(1, dadosUsina, customers);

    setCustomers(NewCustomers);
  };

  useEffect(() => {
    updateListCustomers();
  }, []);

  useEffect(() => {
    const newId =
      customers
        .map((item: Customer) => item.numeroCliente)
        .sort((a: number, b: number) => b - a)[0] + 1 || 1;
    setIdCustomer(newId);
  }, [customers]);

  const context = {
    customer,
    setCustomer,
    customers,
    setCustomers,
    usina,
    setUsina,
    idCustomer,
    updateListCustomers,
  };

  return (
    <SharenergyContext.Provider value={context}>
      {children}
    </SharenergyContext.Provider>
  );
};

export { SharenergyContextProvider };
export default SharenergyContext;
