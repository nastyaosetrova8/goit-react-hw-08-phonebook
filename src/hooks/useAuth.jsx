import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/auth/selectors";
import { selectError, selectIsLoading } from "redux/contacts/selectors";


export const useAuth = () => {
    
    return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    error: useSelector(selectError),
    isLoading: useSelector(selectIsLoading),
    };
  };

