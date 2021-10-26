import logo from "assets/img/logo-Sharenergy-01.png";
import * as React from 'react';
import { Button } from "../components.styleds";
import { ALink, Header, UlMenu } from "./styled";






const NavBar = () => {
  return (
    <Header>
        <ALink id="logo" href="/"><img src={logo} alt="" width="250" /></ALink>
        <nav id="nav">
            <Button id="btn-mobile" aria-expanded="false">Menu
                <span id="hamburger"></span>
            </Button>
            <UlMenu id="menu">
                <li><ALink href="/">INÍCIO</ALink></li>
                <li><ALink href="/about-us">SOBRE NÓS</ALink></li>
                <li><ALink href="/contact">CONTATO</ALink></li>
                <li><ALink href="/contact">CARREIRAS</ALink></li>
                <li><ALink href="/contact">BLOG</ALink></li>
                <Button type="button" className="btn-lg">ORÇAMENTO</Button>
            </UlMenu>
        </nav>
    </Header>
  );
};

export default NavBar;
