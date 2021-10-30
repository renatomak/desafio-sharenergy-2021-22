import React from "react";
import GlobalContext from "store/context";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
}

export default App;
