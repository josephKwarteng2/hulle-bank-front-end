import { useState } from "react";
import "./TransactionAnalytics.css";
import IconArrow from "../../assets/Icon-arrow-down.svg";

const TransactionsAnalytics = () => {
  const [transactionsAnalytics, setTransactionsAnalytics] = useState(false);

  return (
    <div className="analytics-card">
      <p
        onClick={() => setTransactionsAnalytics(!transactionsAnalytics)}
        className="transaction-analytics"
      >
        Transactions Analytics
      </p>
      {transactionsAnalytics && (
        <div className="analytics-inner-card">
          <div className="analytics-content">
            <li className="text-transactions-analytics">
              Transactions Analytics
            </li>
            <li className="text-settlement-analytics">Settlement Analytics</li>
            <li className="text-customer-analytics">Customer Analytics</li>
          </div>
        </div>
      )}
      <img src={IconArrow} alt="arrow-down" className="icon-arrow-down" />
    </div>
  );
};

export default TransactionsAnalytics;
