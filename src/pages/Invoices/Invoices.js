import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import "./Invoices.css";

const Invoices = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="invoices"></div>
    </>
  );
};

export default Invoices;
