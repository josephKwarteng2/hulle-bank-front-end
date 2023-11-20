import "./AddAccountModal.css";

const AddAccountModal = () => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-top">
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
        </div>
      </div>
    </>
  );
};
export default AddAccountModal;
