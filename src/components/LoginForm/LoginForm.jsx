import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { AuthFormStyled, AuthLabelStyled, ButtonStyled, InputStyle } from "./LoginForm.styled";


export const LoginForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  

return (
      <AuthFormStyled onSubmit={handleSubmit} autoComplete="off">
        <AuthLabelStyled >

          <InputStyle type="email" name="email" id="standart" label="Email" required />

          {/* <input type="email" name="email" /> */}
        </AuthLabelStyled>
        <AuthLabelStyled >


        <InputStyle type="password" name="password" id="outlined-basic" label="Password" required />

          {/* <input type="password" name="password" /> */}

        </AuthLabelStyled>
        <ButtonStyled type="submit">Sign In</ButtonStyled>
      </AuthFormStyled>
    );

  };