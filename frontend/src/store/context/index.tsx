import React from "react";

import { SherenergyContextProvider } from "./context";

const GlobalContext: React.FC = ({ children }) => {
    return (
        <SherenergyContextProvider>
            {children}
        </SherenergyContextProvider>
    )
}

export default GlobalContext;