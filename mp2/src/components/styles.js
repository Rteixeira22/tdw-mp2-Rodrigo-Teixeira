import React from "react";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

export const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

export const NavbarItem = styled.li`
  margin: 0;

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;

    &:hover {
      background-color: #555;
    }
  }

  &.active a {
    background-color: #444; /* Fundo diferente */
    border: 2px solid red; /* Borda vermelha */
  }
`;
