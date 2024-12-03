import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../imgs/logo.png";

import { NavBarToggle, Hamburger, Bar, MainNav, NavA } from "../styles/styles";

const Logo = styled.img`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
  height: 60px;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #0056b3;
  }
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

      <div to="/">
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
      </div>

      <MainNav style={{ display: displayNav }}>
        <Link to="/favorites" className="text-decoration-none me-5">
          <NavA>Favorites</NavA>
        </Link>
        <Link to="/about" className="text-decoration-none">
          <NavA>About</NavA>
        </Link>
      </MainNav>
    </Bar>
  );
};

export default Navbar;
