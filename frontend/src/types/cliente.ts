import { User } from "./user";
import { Usinas } from "./usinas";

export type Cliente = {
  user: User;
  usinas: Usinas[];
};
