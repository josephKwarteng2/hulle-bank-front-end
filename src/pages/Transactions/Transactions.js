import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import "./Transactions.css";

const Transactions = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="transactions"></div>
    </>
  );
};

export default Transactions;
