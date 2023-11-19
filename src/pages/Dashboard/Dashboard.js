import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import Heading from "../../components/Heading/Heading";
import TransferButton from "../../components/Button/TransferButton";
import AddAccountButton from "../../components/Button/AddAccountButton";
import SubTitle from "../../components/Heading/SubTitle";
import SettlementsCard from "../../components/SettlementsCard/SettlementsCard";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [totalPaidSettlements, setTotalPaidSettlements] = useState(0);
  const [totalPendingSettlements, setTotalPendingSettlements] = useState(0);
  const [totalEarnings, setTotalEawrningSettlements] = useState(0);
  const [totalCharges, setTotalCharges] = useState(0);

  useEffect(() => {
    const readData = async () => {};
  });
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="dashboard">
        <div class="text-wrapper">
          <Heading heading="Dashboard" />
          <SubTitle subtitle="Track and manage customer information and activities. Click transfer to send to your persoanl account" />
        </div>
        <div class="buttons-wrapper">
          <AddAccountButton />
          <TransferButton />
        </div>
      </div>
      <SettlementsCard />
    </>
  );
};

export default Dashboard;
