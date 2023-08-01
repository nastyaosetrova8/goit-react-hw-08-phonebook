import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { PagesStyled } from "./Home/Home.styled";


export default function Register() {
    return (
      <PagesStyled>
        <h1>
          <title>Registration</title>
        </h1>
        <RegisterForm />
      </PagesStyled>
    );
  }