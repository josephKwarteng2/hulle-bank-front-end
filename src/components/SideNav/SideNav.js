import "./SideNav.css";
import {
  LogoIcon,
  HomeIcon,
  TransactionsIcon,
  SettlementsIcon,
  CustomersIcon,
  InvoicesIcon,
  TeamMembersHomeIcon,
  TeamIcon,
  SettingsIcon,
  LogoutIcon,
} from "../Icons/icons";
import { NavLink, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div class="logo-container">
        <LogoIcon />
      </div>
      <div class="side-nav-links">
        <NavLink to={"/dashboard"}>
          <HomeIcon /> Dashboard
        </NavLink>
        <NavLink to={"/transactions"}>
          <TransactionsIcon /> Transactions
        </NavLink>
        <NavLink to={"/reports"}>
          <TransactionsIcon /> Reports
        </NavLink>
        <NavLink to={"/settlements"}>
          <SettlementsIcon /> Settlements
        </NavLink>
        <NavLink to={"/customers"}>
          <CustomersIcon /> Customers
        </NavLink>
        <NavLink to={"/teammembers"}>
          <TeamIcon /> Team Members
        </NavLink>
        <NavLink to={"/invoices"}>
          <InvoicesIcon /> Invoices
        </NavLink>
        <NavLink to={"/home"} className={"no-styling"}>
          <TeamMembersHomeIcon /> Team Members
        </NavLink>
      </div>
      <div class="side-nav-bottom">
        <NavLink to={"/settings"}>
          <SettingsIcon /> Account Settings
        </NavLink>
        <Link>
          <LogoutIcon /> Log out
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
