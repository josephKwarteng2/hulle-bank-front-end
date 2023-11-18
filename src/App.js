import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import ForgotPassword from "./pages/Account/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage from "./pages/HomePage";
import Customers from "./pages/Customers/Customers";
import Transactions from "./pages/Transactions/Transactions";
import Reports from "./pages/Reports/Reports";
import Settlements from "./pages/Settlements/Settlements";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import Invoices from "./pages/Invoices/Invoices";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settlements" element={<Settlements />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/teammembers" element={<TeamMembers />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
