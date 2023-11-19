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
  const [totalPaidSettlements, setTotalPaidSettlements] = useState(1, 400, 294);
  const [totalPendingSettlements, setTotalPendingSettlements] = useState(0);
  const [totalEarnings, setTotalEarningSettlements] = useState(0);
  const [totalCharges, setTotalCharges] = useState(0);

  useEffect(() => {
    fetch("_stdb.json")
      .then((response) => response.json())
      .then((data) => {
        setTotalPaidSettlements(data.totalPaidSettlements);
        setTotalPendingSettlements(data.totalPendingSettlements);
        setTotalEarningSettlements(data.totalEarningSettlements);
        setTotalCharges(data.totalCharges);
      })
      .catch((error) => console.error("Error fetching data:, error"));
  }, []);
  return (
    <>
      <TopNav />
      <SideNav />
      {/* This div represents the whole page, padding and everything accounted for, feel free
          to put items inside the div */}
      <div className="dashboard">
        {/* This <header/> stands for the whole row on top just under the top nav */}
        <header>
          <div class="text-wrapper">
            <Heading heading="Dashboard" />
            <SubTitle subtitle="Track and manage customer information and activities. Click transfer to send to your persoanl account" />
          </div>
          <div class="buttons-wrapper">
            <AddAccountButton />
            <TransferButton />
          </div>
        </header>
        {/* End of header */}
        {/* Start of card list, flexed this container */}
        <div class="card-list">
          <SettlementsCard
            title="Paid Settlements"
            value={totalPaidSettlements}
          />
          <SettlementsCard
            title="Pending Settlements"
            value={totalPendingSettlements}
          />
          <SettlementsCard title="Earnings" value={totalEarnings} />
          <SettlementsCard title="Charges" value={totalCharges} />
        </div>
        {/* End of card-list */}
        {/* If you need any container, just create a div */}
      </div>
    </>
  );
};

export default Dashboard;
