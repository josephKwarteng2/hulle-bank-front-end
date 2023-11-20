import React from "react";
import "./AddAccountButton.css";
import IconPlus from "../../assets/icon-plus.svg";

const AddAccountButton = ({ onClick }) => {
  return (
    <button className="add-account-button" onClick={onClick}>
      <img src={IconPlus} alt="icon-plus" />
      <p>Add Account</p>
    </button>
  );
};

export default AddAccountButton;
