import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import "./Settlements.css";
import AddAccountButton from "../../components/Button/AddAccountButton";
import TransferButton from "../../components/Button/TransferButton";
import Heading from "../../components/Heading/Heading";
import SubTitle from "../../components/Heading/SubTitle";

const Settlements = () => {
  const settlementsData = [
    {
      title: "Total Paid Settlement",
      amount: "1,400,294",
      des: "This is the total amount of money settled into your account",
    },
    {
      name: "Unsettled Balance",
      amount: "1,200,294",
      des: "This is the total amount of money left to be settled into your account",
    },
    {
      name: "Unsettled Balance",
      amount: "1,100,294",
      des: "This is the total amount of money left to be settled into your account",
    },
  ];
  return (
    <>
      <TopNav />
      <SideNav />

      <div className="settlements">
        <header>
          <div className="heading">
            <Heading heading="Settlements" />
            <SubTitle subtitle="Track and manage customer information and activities. Click transfer to send to your personal account" />
            <div className="settlements-status">
              <p>All Settlements</p>
              <p>Pending</p>
              <p>Completed</p>
            </div>
          </div>

          <div className="settlements-buttons">
            <AddAccountButton />
            <TransferButton />
          </div>
        </header>

        <div className="all-settlements">
          {settlementsData.map((settlement, index) => (
            <div key={index} className="settlement-item">
              <p>{settlement.title}</p>
              <p>GHc {settlement.amount}</p>
              <p> {settlement.des}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Settlements;
