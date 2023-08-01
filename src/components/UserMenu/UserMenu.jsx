import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { ButtonUserStyled, UserMenuStyled } from "./UserMenu.styled";


export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    const handleLogOut = () => dispatch(logOut());
  
    return (
      <UserMenuStyled>
        <p>Welcome, {user.name}!</p>
        <ButtonUserStyled
        variant="text"
        sx = {{color: 'rgb(3, 3, 96)', textTransform: 'capitalize', fontSize: '18px', fontWeight: '600'}}
        size="medium"
        type="button" 
        onClick={handleLogOut}>
          Logout
        </ButtonUserStyled>
      </UserMenuStyled>
    );
  };