import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import ForgotPassword from "./pages/Account/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import Customers from "./pages/Customers/Customers";
import Settings from "./pages/Settings/Settings";
import Invoices from "./pages/Invoices/Invoices";
import Reports from "./pages/Reports/Reports";
import Settlements from "./pages/Settlements/Settlements";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/team-members" element={<TeamMembers />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settlements" element={<Settlements />} />
    </Routes>
  );
}

export default App;
