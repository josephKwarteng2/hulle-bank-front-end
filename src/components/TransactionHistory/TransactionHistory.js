import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionHistory.css";
import Calendar from "../../assets/icon-calendar.svg";

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
    <div>
      <div className="history-header">
        <p>Transaction History</p>
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
        <div>
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
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className="calendar-container">
                  <img src={Calendar} alt="calendar" className="calendar" />
                </div>
                {transaction.dateSettled}
              </td>
              <td className="account-settled-on">
                {transaction.accountSettledOn}
              </td>
              <td className="transaction-charges">GHc{transaction.charges}</td>
              <td className="ref-id">ID:{transaction.refId}</td>
              <td className="total-amount">
                GHc{transaction.totalAmountSettled}
              </td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
