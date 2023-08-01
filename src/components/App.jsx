import { lazy, useEffect} from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { SharedLayout } from "./SharedLayout/SharedLayout"

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { selectToken } from "redux/auth/selectors";
import Loader from "./Loader/Loader";



const Home = lazy(() => import('../Pages/Home/Home'));
const Register =lazy(() => import('../Pages/Register'));
const Login = lazy(() => import('../Pages/Login'));
const Contacts = lazy(() => import('../Pages/Contacts')); 


export default function App () {
const dispatch = useDispatch();
const {isRefreshing} = useAuth();
const token = useSelector(selectToken);

useEffect(() => {
if(!token) return;
  dispatch(refreshUser())
}, [dispatch, token])

  return isRefreshing ? (
    <Loader/>) : (
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute component={Register} redirectTo="/contacts" />} />
        <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/contacts" />} />
        <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo="/login" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
};