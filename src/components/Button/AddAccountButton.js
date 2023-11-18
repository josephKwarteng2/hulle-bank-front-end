import React from "react";
import "./AddAccountButton.css";
import IconPlus from "../../assets/icon-plus.svg";

const AddAccountButton = () => {
  return (
    <div className="add-account-button">
      <img src={IconPlus} alt="icon-plus" />
      <p>Add Account</p>
    </div>
  );
};

export default AddAccountButton;
