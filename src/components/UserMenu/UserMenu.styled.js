import { Button } from "@mui/material";
import styled from "styled-components";


export const UserMenuStyled = styled.div`
display: flex;
align-items: center;
gap: 32px;
  font-size: 18px;
    font-weight: 600;
  color: rgb(3, 3, 96);
`;


export const ButtonUserStyled = styled(Button)(() => ({
    padding: '6px 10px',
    width: '94px',
    fontSize: '18px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    transition: 'box-shadow 100ms linear',
    '&:hover': {
      border: '1px solid blue',
}})
);