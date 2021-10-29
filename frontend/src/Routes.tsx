import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Users from "pages/Users";
import AddUser from "pages/Users/Add";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users/add" component={AddUser} />
        <Route path="/users" component={Users} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;