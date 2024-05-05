import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout"
import { refreshUser } from './redux/auth/operations'
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>}/>
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>}/>
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>}/>
        </Routes>
      </Layout>
  )
}

export default App;
