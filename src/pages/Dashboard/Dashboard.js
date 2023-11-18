import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import Heading from "../../components/Heading/Heading";
import SubTitle from "../../components/Heading/SubTitle";
import AddAccountButton from "../../components/Button/AddAccountButton";
import TransferButton from "../../components/Button/TransferButton";
import SettlementsCard from "../../components/SettlementsCard/SettlementsCard";

const Dashboard = () => {
  return (
    <div>
      <SideNav />
      <Heading heading="Dashboard" />
      <SubTitle subtitle="Track and manage customer information and activities. Click transfer to send to your persoanl account" />
      <AddAccountButton />
      <TransferButton />
      {/* <SettlementsCard /> */}
    </div>
  );
};

export default Dashboard;
