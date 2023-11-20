import { useState } from "react";
import CloseButton from "../Icons/icons";
import "./AddAccountModal.css";

const AddAccountModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  const close = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className={`modal-overlay ${isVisible ? "" : "visibly-hidden"}`}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <h2>Settlements account</h2>
              <p>Enter one or more accounts to send your earnings</p>
            </div>
            <CloseButton onClick={close} />
          </div>
          <div className="modal-content"></div>
        </div>
        {/* <div className="modal-top">
          <div className="modal-content">
            <h2>Settlement Accounts</h2>
            <p>Enter one or more accounts to send your earnings</p>
            <form>
              <input
                type="text"
                placeholder="Enter account number"
                className="modal-input"
              />
              <input
                type="text"
                placeholder="Enter account name"
                className="modal-input"
              />
              <button className="modal-button">Add Account</button>
            </form>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default AddAccountModal;
