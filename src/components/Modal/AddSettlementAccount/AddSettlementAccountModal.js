import "./AddSettlementAccount.css";
import yellowCircle from "../../../assets/images/yellow circle.png";
import avatar from "../../../assets/images/Avatar empty ash.png";
import {
  ArrowDownIcon,
  CloseButton,
  InfoIcon,
  ModalCheckMarkIcon,
} from "../../Icons/icons";
import { useState } from "react";
import ModalButtons from "../../Button/ModalButtons";

const AddSettlementAccountModal = () => {
  const [settlementAccountDetails, setSettlementAccountDetails] = useState({
    bank: "",
    accountNumber: "",
    alias: "",
    primaryAccount: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSettlementAccountDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = () => {
    setSettlementAccountDetails((prev) => ({
      ...prev,
      primaryAccount: !prev.primaryAccount,
    }));
  };

  return (
    <>
      <div className="global-modal-overlay">
        <div className="global-modal add-settlement-account-modal">
          <div className="close-button">
            <CloseButton />
          </div>
          <img src={yellowCircle} alt="none" />
          <h2>Add Settlement account</h2>
          <p>Money gotten from your business can be paid here.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="bank" className="visibly-hidden">
              Bank:
            </label>
            <select
              name="bank"
              id="bank"
              className="global-modal-select"
              value={settlementAccountDetails.bank}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your bank
              </option>
              <option value="gtbank">GT Bank</option>
              <option value="zenithbank">Zenith Bank</option>
              <option value="ecobank">Ecobank</option>
              <option value="fidelitybank">Fidelity Bank</option>
            </select>
            <ArrowDownIcon />
            <label htmlFor="account-number" className="visibly-hidden">
              Account
            </label>
            <input
              className="global-modal-input"
              type="number"
              name="accountNumber"
              placeholder="Account Number"
              id="account-number"
              value={settlementAccountDetails.accountNumber}
              onChange={handleChange}
            />
            <label htmlFor="alias" className="visibly-hidden">
              Alias:
            </label>
            <input
              className="global-modal-input"
              type="text"
              id="alias"
              placeholder="Alias (Optional)"
              name="alias"
              value={settlementAccountDetails.alias}
              onChange={handleChange}
            />
            <InfoIcon />
            <div className="badge-base">
              <img src={avatar} alt="empty" />
              <div className="badge-base-details">
                <p>Account name</p>
                <p>___</p>
              </div>
            </div>
            <div className="buttons-base">
              <label>
                <input
                  type="radio"
                  name="primaryAccount"
                  value={settlementAccountDetails.primaryAccount}
                  onClick={handleRadioChange}
                  checked={settlementAccountDetails.primaryAccount}
                />
                <span>
                  <ModalCheckMarkIcon /> Set as primary account
                </span>
              </label>
              <ModalButtons secondaryButtonText="Add Account" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSettlementAccountModal;
