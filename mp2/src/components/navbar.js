import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../imgs/logo.png";

import { NavBarToggle, Hamburger, NavLi, Bar, MainNav } from "./styles";

const Logo = styled.img`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
  height: 60px; /* Ajuste o tamanho conforme necessário */
`;

const Navbar = (props) => {
  const [displayNav, setDisplayNav] = useState(
    props.displayNav ? "flex" : "none",
  );

  const toggleNavBar = () => {
    setDisplayNav((prevDisplayNav) =>
      prevDisplayNav === "none" ? "flex" : "none",
    );
  };

  return (
    <Bar>
      <NavBarToggle onClick={toggleNavBar}>
        <Hamburger />
      </NavBarToggle>

      <NavLink to="/">
        <Logo src={logo} alt="Logo" />
      </NavLink>

      <MainNav style={{ display: displayNav }}>
        <NavLi>
          <NavLink to="/">Main</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/">Search</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/">Avocados</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/">Login</NavLink>
        </NavLi>
      </MainNav>
    </Bar>
  );
};

export default Navbar;
