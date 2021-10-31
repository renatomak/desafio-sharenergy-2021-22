import { Usina } from "./usina";

export type Cliente = {
  numeroCliente: number;
  nomeCliente: string;
  rendimento: number;
  usinas: Usina[];
};


