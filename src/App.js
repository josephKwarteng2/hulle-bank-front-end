import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import ForgotPassword from "./pages/Account/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
