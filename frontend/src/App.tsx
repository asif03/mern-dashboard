import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Callback from "./components/auth/Callback";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  // Ensures cookie is sent
  axios.defaults.withCredentials = true;
  const { loggedIn } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={loggedIn ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route path="signup" element={<Signup />} />
          <Route path="auth/callback" element={<Callback />} />
          <Route element={loggedIn ? <Layout /> : <Navigate to="/login" />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
