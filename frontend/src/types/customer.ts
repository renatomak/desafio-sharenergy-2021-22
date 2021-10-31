import { Usina } from "./usina";

export type Customer = {
  numeroCliente: number;
  nomeCliente: string;
  rendimento: number;
  usinas: Usina[];
};


