import { LoginForm } from "components/LoginForm/LoginForm";
import { PagesStyled } from "./Home/Home.styled";



export default function Login() {
    return (
      <PagesStyled>
        <h1>
          <title>Login</title>
        </h1>
        <LoginForm />
      </PagesStyled>
    );
  }