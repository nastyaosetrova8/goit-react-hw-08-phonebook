import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 18px;
    font-weight: 600;
  color: rgb(3, 3, 96);

  &.active {
    background-color: rgb(211, 211, 245);
  }
`;

