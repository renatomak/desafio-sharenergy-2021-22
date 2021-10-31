import DataAnalysis from "pages/DataAnalysis";
import Home from "pages/Home";
import Users from "pages/Customers";
import FinancialStatement from "pages/Customers/FinancialStatement";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

export const DATAANALYSIS = "/data-analysis";
export const HOME = '/';
export const CUSTOMERS = '/customers'
export const FINANCIALSTATEMENT = "/financial-statement"

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={DATAANALYSIS} component={DataAnalysis} />
        <Route path={CUSTOMERS} component={Users} />
        <Route path={FINANCIALSTATEMENT} component={FinancialStatement} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
