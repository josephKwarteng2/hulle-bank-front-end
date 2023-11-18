import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import Heading from "../../components/Heading/Heading";
import TransferButton from "../../components/Button/TransferButton";
import AddAccountButton from "../../components/Button/AddAccountButton";
import SubTitle from "../../components/Heading/SubTitle";
import "./Dashboard.css";

const Dashboard = () => {
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
        {/* <SettlementsCard /> */}
      </div>
    </>
  );
};

export default Dashboard;
