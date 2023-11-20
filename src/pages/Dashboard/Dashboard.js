import { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import Heading from "../../components/Heading/Heading";
import TransferButton from "../../components/Button/TransferButton";
import AddAccountButton from "../../components/Button/AddAccountButton";
import SubTitle from "../../components/Heading/SubTitle";
import SettlementsCard from "../../components/SettlementsCard/SettlementsCard";
import "./Dashboard.css";
import AddAccountModal from "../../components/Modal/AddAccountModal";

const Dashboard = () => {
  const [totalPaidSettlements, setTotalPaidSettlements] = useState(1400);
  const [totalPendingSettlements, setTotalPendingSettlements] = useState(0);
  const [totalEarnings, setTotalEarningSettlements] = useState(0);
  const [totalCharges, setTotalCharges] = useState(0);

  useEffect(() => {
    fetch("_stdb.json")
      .then((response) => response.json())
      .then((data) => {
        setTotalPaidSettlements(data.totalPaidSettlements || 0);
        setTotalPendingSettlements(data.totalPendingSettlements || 100);
        setTotalEarningSettlements(data.totalEarningSettlements || 1000);
        setTotalCharges(data.totalCharges || 100);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* <AddAccountModal /> */}
      <TopNav />
      <SideNav />
      {/* This div represents the whole page, padding and everything accounted for, feel free
          to put items inside the div */}
      <div className="dashboard">
        {/* This <header/> stands for the whole row on top just under the top nav */}
        <header>
          <div className="text-wrapper">
            <Heading heading="Dashboard" />
            <SubTitle subtitle="Track and manage customer information and activities. Click transfer to send to your persoanl account" />
          </div>
          <div className="buttons-wrapper">
            <AddAccountButton />
            <TransferButton />
          </div>
        </header>
        {/* End of header */}
        {/* Start of card list, flexed this container */}
        <div className="card-list">
          <SettlementsCard
            title="Paid Settlements"
            value={totalPaidSettlements}
            period="This Month"
          />
          <SettlementsCard
            title="Pending Settlements"
            value={totalPendingSettlements}
            period="This Year"
          />
          <SettlementsCard
            title="Total Earnings"
            value={totalEarnings}
            period="This Year"
          />
          <SettlementsCard
            title="Total Charges"
            value={totalCharges}
            period="This Year"
          />
        </div>
        {/* End of card-list */}
        {/* If you need any container, just create a div */}
      </div>
    </>
  );
};

export default Dashboard;
