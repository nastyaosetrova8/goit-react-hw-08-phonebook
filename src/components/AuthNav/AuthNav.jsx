import { NavLinkStyled } from "./AuthNav.styled";


export const AuthNav = () => {
    return (
      <div>
        <NavLinkStyled to="/register">
          Sign Up
        </NavLinkStyled>
        <NavLinkStyled  to="/login">
          Sign In
        </NavLinkStyled>
      </div>
    );
  };