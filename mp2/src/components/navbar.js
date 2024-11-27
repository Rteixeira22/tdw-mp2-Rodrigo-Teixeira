import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../imgs/logo.png";

import { NavBarToggle, Hamburger, NavLi, Bar, MainNav, NavA } from "./styles";

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

      <NavA to="/">
        <Logo src={logo} alt="Logo" />
      </NavA>

      <MainNav style={{ display: displayNav }}>
        <NavLi>
          <NavA to="/">About</NavA>
        </NavLi>
      </MainNav>
    </Bar>
  );
};

export default Navbar;
