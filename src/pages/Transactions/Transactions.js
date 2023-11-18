HEAD;
import React from "react";
import SideNav from "../../components/SideNav/SideNav";

import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import "./Transactions.css";

const Transactions = () => {
  return (
    <>
      <SideNav />
      <TopNav />
      <SideNav />
      <div className="transactions"></div>
    </>
  );
};

export default Transactions;
