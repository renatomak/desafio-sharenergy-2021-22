import { Usinas } from "./usinas";

export type Cliente = {
  numeroCliente: number;
  nomeCliente: string;
  usinas: Usinas[];
};
