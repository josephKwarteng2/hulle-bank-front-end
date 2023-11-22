import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionHistory.css";
import Calendar from "../../assets/icon-calendar.svg";
import DownArrow from "../../assets/Icon-arrow-down.svg";
import IconFilter from "../../assets/filters-icon.svg";
import IconDoc from "../../assets/document-download.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import CheckCircle from "../../assets/check_circle.svg";
import IconError from "../../assets/error.svg";
import IconCancel from "../../assets/cancel.svg";
import IconRed from "../../assets/image6.svg";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("_th.json");
        setTransactions(response.data);
        setFilteredTransactions(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter transactions when either searchTerm or filterType changes
    const filtered = transactions.filter((transaction) => {
      const matchesSearch =
        transaction.dateSettled
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        transaction.totalAmountSettled.toString().includes(searchTerm);
      const matchesFilter =
        filterType === "all" || transaction.type === filterType;

      return matchesSearch && matchesFilter;
    });

    setFilteredTransactions(filtered);
  }, [searchTerm, filterType, transactions]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="history-div">
      <div className="history-header">
        <p>Transaction History</p>
        {/* <img src={DownArrow} alt="down=arrow" className="down-arrow" /> */}
        <div className="transaction-search-bar">
          <label htmlFor="search" className="visibly-hidden">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search transaction by date, amount, reference etc"
          />
        </div>
        <div className="header-content">
          <div className="date-container">
            <img src={Calendar} alt="calendar" />
            <p className="text-date">Date</p>
            <img src={DownArrow} alt="down arrow" className="date-arrow-down" />
          </div>
          <div>
            <img src={IconFilter} alt="flter-icon" className="icon-filter" />
            <label htmlFor="filter" className="visibly-hidden">
              Filter by Type:
            </label>
            <select
              id="filter"
              value={filterType}
              onChange={handleFilterChange}
              className="filter-container"
              text="Filters"
            >
              <option value="all">All</option>
              <option value="account-settled-on">Amount </option>
              <option value="date">Date</option>
            </select>
          </div>
          <div className="document-download">
            <img src={IconDoc} alt="download-icon" className="download-icon" />
            <p>Export</p>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date Settled</th>
            <th>Account Settled On</th>
            <th>Charges</th>
            <th>Ref ID</th>
            <th>Total Amount Settled</th>
            <th>Status</th>
            <th>
              {" "}
              <a href="/view-all">View all</a>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.refId}>
              <td>
                <div className="calendar-container">
                  <img src={Calendar} alt="calendar" className="calendar" />
                </div>
                {transaction.dateSettled}
                <p className="time-settled">{transaction.timeSettled}</p>
              </td>
              <td className="account-settled-on">
                {transaction.accountSettledOn}

                <p>
                  <img src={IconRed} alt="icon-red" className="icon-red" />
                  {transaction.supportingText}
                </p>
              </td>
              <td className="transaction-charges">GHc{transaction.charges}</td>
              <td className="ref-id">ID:{transaction.refId}</td>
              <td className="total-amount">
                GHc{transaction.totalAmountSettled}
              </td>

              <td className="section-status">
                <div className="status-icons">
                  {transaction.status === "Paid" ? (
                    <img src={CheckCircle} alt="check-icon" />
                  ) : transaction.status === "Pending" ? (
                    <img src={IconError} alt="check-icon" />
                  ) : (
                    <img src={IconCancel} alt="cancel-icon" />
                  )}
                </div>
                {transaction.status}
              </td>

              <td className="view-all-details">
                <a href="/details">{transaction.viewAll}</a>
                <img src={ArrowRight} alt="arrow right" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
