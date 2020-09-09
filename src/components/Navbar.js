import React from "react";
import { Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import logo from "./img/logo.png";
const Navbar = () => {
  return (
    <>
      <Nav id="navbar">
        <NavbarBrand>
          <img src={logo} alt="logo" id="logo" />| Andrew A.K.
        </NavbarBrand>
        <NavItem>
          <NavLink href="https://github.com/akarpisz">| Github</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.linkedin.com/in/the-andrew-ak">
            | LinkedIn
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
    </>
  );
};
export default Navbar;
