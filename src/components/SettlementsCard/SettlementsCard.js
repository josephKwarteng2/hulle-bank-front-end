// SettlementsCard.js
import React from "react";
import "./SettlementsCard.css";
import IconInfo from "../../assets/info-circle.svg";

const SettlementsCard = ({ title, value, period }) => {
  return (
    <div className="settlements-card">
      <p>{title}</p>
      <div className="info-icon">
        <img src={IconInfo} alt="icon-info" />
      </div>
      <h1 className="value">GHc{value}</h1>
      <p className="period">{period}</p>

      <div className="divider"></div>
    </div>
  );
};

export default SettlementsCard;
