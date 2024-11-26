import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import {
  NavLink,
  NavBarToggle,
  Hamburger,
  NavLi,
  Bar,
  MainNav,
} from "./styles";

const Logo = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
`;

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { displayNav: props.displayNav ? "flex" : "none" };
  }
  toggleNavBar() {
    this.setState((prevState, props) => {
      switch (prevState.displayNav) {
        case "none":
          return { displayNav: "flex" };
        case "flex":
        default:
          return { displayNav: "none" };
      }
    });
  }
  render() {
    return (
      <Bar>
        <NavBarToggle onClick={() => this.toggleNavBar()}>
          <Hamburger />
        </NavBarToggle>
        <Logo to="/">logo</Logo>
        <MainNav display={this.state.displayNav}>
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
  }
}
export default Navbar;
