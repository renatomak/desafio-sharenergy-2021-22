import DataAnalysis from "pages/DataAnalysis";
import Home from "pages/Home";
import Users from "pages/Users";
import FinancialStatement from "pages/Users/FinancialStatement";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/data-analysis" component={DataAnalysis} />
        <Route path="/users" component={Users} />
        <Route path="/financial-statement" component={FinancialStatement} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
