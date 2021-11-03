import { Usina } from "./usina";

export type Customer = {
  numeroCliente: number;
  nomeCliente: string;
  nomeUsuario: string;
  password: string;
  rendimento: number;
  usinas: Usina[];
};
