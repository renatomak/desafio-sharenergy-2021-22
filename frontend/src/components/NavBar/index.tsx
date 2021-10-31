import logo from "assets/img/logo-Sharenergy-01.png";
import * as React from "react";
import { CUSTOMERS, DATAANALYSIS, FINANCIALSTATEMENT, HOME } from "Routes";
import { Button } from "../components.styleds";
import { ALink, Header, UlMenu } from "./styled";

const NavBar = () => {
  return (
    <Header>
      <ALink id="logo" href={HOME}>
        <img src={logo} alt="" width="250" />
      </ALink>
      <nav id="nav">
        <Button id="btn-mobile" aria-expanded="false">
          Menu
          <span id="hamburger"></span>
        </Button>
        <UlMenu id="menu">
          <li>
            <ALink href={HOME}>INÍCIO</ALink>
          </li>
          <li>
            <ALink href={DATAANALYSIS}>PRODUÇÃO DIÁRIA</ALink>
          </li>
          <li>
            <ALink href={CUSTOMERS}>CLIENTES</ALink>
          </li>
          <li>
            <ALink href={FINANCIALSTATEMENT}>DEMONSTRATIVOS</ALink>
          </li>
          <li>
            <ALink href={HOME}>BLOG</ALink>
          </li>
          <Button type="button" className="btn-lg">
            ORÇAMENTO
          </Button>
        </UlMenu>
      </nav>
    </Header>
  );
};

export default NavBar;
