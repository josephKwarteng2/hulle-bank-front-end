import React from "react";
import "./TransferButton.css";
import IconSend from "../../assets/icon-send.svg";

const TransferButton = () => {
  return (
    <div className="transfer-button">
      <img src={IconSend} alt="icon-plus" />
      <p>Transfer</p>
    </div>
  );
};

export default TransferButton;
