import DataAnalysis from "pages/Dashboard";
import Home from "pages/Home";
import Users from "pages/Customers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

export const DATAANALYSIS = "/data-analysis";
export const HOME = "/";
export const CUSTOMERS = "/customers";


const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={DATAANALYSIS} component={DataAnalysis} />
        <Route path={CUSTOMERS} component={Users} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
