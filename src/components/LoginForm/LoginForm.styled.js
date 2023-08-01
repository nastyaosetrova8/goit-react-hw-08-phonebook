import styled from 'styled-components';
import { TextField } from "@mui/material";

export const AuthFormStyled = styled.form`
  width: 300px;
  margin: 180px auto;
  padding: 44px 24px;
  border: 1px solid blue;
border-radius: 12px;
  background-color: #d3d3f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  /* & input {
    padding: 8px;
    font-family: inherit;
    font-size: 16px;
    border: 1px solid rgba(24, 24, 64, 0.4);
    border-radius: 12px;
    outline: transparent;
  } */

`;

export const InputStyle = styled(TextField)(() => ({
  // backgroundColor: '#ffffff',
//   '&::placeholder': {
// color: '#ffffff'
//   },
  // border: '1px solid rgba(24, 24, 64, 0.4)',
})
);


export const AuthLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;
  color: #ffffff;
  font-size: 18px;
    font-weight: 400;
`;

export const ButtonStyled = styled.button`
margin: auto;
padding: 8px 16px;
    border-radius: 12px;
    background-color: #ffffff;
    text-align: center;
    display: block;
    color: blue;
    border: 0;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 400;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      transition: box-shadow 250ms linear, border 250ms linear;

      &:hover,
      &:focus {
    box-shadow: none;
    border: 1px solid rgba(24, 24, 64, 0.4);
  }
`
