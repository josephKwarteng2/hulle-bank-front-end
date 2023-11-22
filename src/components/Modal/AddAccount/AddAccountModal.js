import { useState } from "react";
import { ArrowDownIcon, CloseButton, PlusButton } from "../../Icons/icons";
import "./AddAccountModal.css";
import gtBankIcon from "../../../assets/images/GUARANTY Trust Bank Icon.png";
import zenithBankIcon from "../../../assets/images/Zenith Bank Icon.png";
import xButton from "../../../assets/images/x button no circle.svg";
import ModalButtons from "../../Button/ModalButtons";

const AddAccountModal = ({ toggleModalDisplay }) => {
  const [account, setAccount] = useState("");
  const accountOptions = [
    {
      name: "GT Bank Account",
      value: "0256347",
    },
    {
      name: "Ecobank Account",
      value: "0223345",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit!!");
  };

  return (
    <>
      <div className="global-modal-overlay">
        <div className="global-modal add-account-modal">
          <div className="modal-header">
            <div>
              <h2>Settlements account</h2>
              <p>Enter one or more accounts to send your earnings</p>
            </div>
            <CloseButton onClick={toggleModalDisplay} />
          </div>
          <div className="modal-content">
            <div className="badges">
              <div className="badge">
                <img src={gtBankIcon} alt="gt bank" />
                <div className="description">
                  <h3>James Campion Drivers</h3>
                  <p>0556894392</p>
                </div>
                <img src={xButton} alt="close" />
              </div>
              <div className="badge">
                <img src={zenithBankIcon} alt="zenith bank" />
                <div className="description">
                  <h3>Tassy Omah</h3>
                  <p>0556894392</p>
                </div>
                <img src={xButton} alt="close" />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="account" className="visibly-hidden">
                Account
              </label>
              <select
                className="global-modal-select"
                name="account"
                id="account"
                value={account}
                onChange={(e) => {
                  setAccount(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select from existing accounts or
                </option>
                {accountOptions.map((account) => (
                  <option key={account.value} value={account.value}>
                    {account.name}
                  </option>
                ))}
              </select>
              <ArrowDownIcon />
              <div className="button-base">
                <PlusButton /> Add new account
              </div>
              <ModalButtons
                secondaryButtonText="Continue"
                toggleModalDisplay={toggleModalDisplay}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddAccountModal;
