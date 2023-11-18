import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="dashboard"></div>
    </>
  );
};

export default Dashboard;
