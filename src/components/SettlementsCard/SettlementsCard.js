// SettlementsCard.js
import React from "react";
import "./SettlementsCard.css";
import IconInfo from "../../assets/info-circle.svg";

const SettlementsCard = ({ title, value, period, percentage }) => {
  return (
    <div className="settlements-card">
      <p>{title}</p>
      <div className="info-icon">
        <img src={IconInfo} alt="icon-info" />
      </div>
      <h1 className="value">GHc{value}</h1>
      <p className="period">{period}</p>
      {/* <div className="percentage-container">
        <p className="percentage">{percentage}%</p>
      </div> */}

      <span className="divider"></span>
    </div>
  );
};

export default SettlementsCard;
