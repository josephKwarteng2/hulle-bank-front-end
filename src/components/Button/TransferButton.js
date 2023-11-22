import React from "react";
import "./TransferButton.css";
import IconSend from "../../assets/icon-send.svg";

const TransferButton = ({ onClick }) => {
  return (
    <div className="transfer-button" onClick={onClick}>
      <img src={IconSend} alt="icon-plus" />
      <p>Transfer</p>
    </div>
  );
};

export default TransferButton;
