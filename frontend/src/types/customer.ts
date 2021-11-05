import { Usina } from "./usina";

export type Customer = {
  _id: string;
  numeroCliente: number;
  nomeCliente: string;
  nomeUsuario: string;
  password: string;
  rendimento: number;
  usinas: Usina[];
};
