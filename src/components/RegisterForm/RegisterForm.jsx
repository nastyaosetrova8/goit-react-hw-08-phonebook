import { AuthFormStyled, AuthLabelStyled, ButtonStyled, InputStyle } from "components/LoginForm/LoginForm.styled";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";


export const RegisterForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
    return (
      <AuthFormStyled onSubmit={handleSubmit} autoComplete="off">
        <AuthLabelStyled>
        
          <InputStyle type="text" name="name" id="standart" label="Username" required />

          {/* <input type="text" name="name" required /> */}
        </AuthLabelStyled>
        <AuthLabelStyled>

          <InputStyle type="email" name="email" id="standart" label="Email" required /> 

          {/* <input type="email" name="email" required /> */}
        </AuthLabelStyled>
        <AuthLabelStyled>

        <InputStyle type="password" name="password" id="standart" label="Password" required /> 
          
          {/* <input type="password" name="password" required /> */}
        </AuthLabelStyled>
        <ButtonStyled type="submit">Register</ButtonStyled>
      </AuthFormStyled>
    );
  };