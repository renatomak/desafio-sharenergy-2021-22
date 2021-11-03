import React from "react";

import { SharenergyContextProvider } from "./context";

const GlobalContext: React.FC = ({ children }) => {
  return <SharenergyContextProvider>{children}</SharenergyContextProvider>;
};

export default GlobalContext;
