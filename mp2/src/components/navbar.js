import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarContainer, NavbarList, NavbarItem } from "./styles";

function Navbar() {
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
