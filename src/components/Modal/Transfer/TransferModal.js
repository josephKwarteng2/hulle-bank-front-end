import { useRef, useState } from "react";
import ModalButtons from "../../Button/ModalButtons";
import {
  CloseButton,
  InfoIcon,
  RefreshIcon,
  RotateIcon,
} from "../../Icons/icons";
import "./TransferModal.css";

const TransferModal = ({ toggleModalDisplay }) => {
  const [transferDetails, setTranferDetails] = useState({
    transferRecurrence: true,
    useTotalSalesAmount: false,
    amount: "",
    settlementType: "",
  });
  const useTotalSalesAmount = useRef(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(transferDetails);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTranferDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (event) => {
    const { value, name } = event.target;

    setTranferDetails((prev) => ({
      ...prev,
      [name]: !value,
    }));
  };

  const handleTotalSalesAmountChange = () => {
    const { current } = useTotalSalesAmount;
    useTotalSalesAmount.current = !current;

    setTranferDetails((prev) => ({
      ...prev,
      useTotalSalesAmount: useTotalSalesAmount.current,
    }));
    console.log(useTotalSalesAmount.current);
  };

  return (
    <div className="global-modal-overlay">
      <div className="global-modal transfer-modal">
        <div className="modal-header">
          <div>
            <h2>Initiate transfer</h2>
            <p>Enter one or more accounts to send your earnings</p>
          </div>
          <CloseButton onClick={toggleModalDisplay} />
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="transfer-recurrence">
              <label>
                <input
                  type="radio"
                  name="transferRecurrence"
                  onChange={handleRadioChange}
                  value={transferDetails.transferRecurrence}
                />
                <span>
                  <RotateIcon /> One-time Transfer <InfoIcon />
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="transferRecurrence"
                  onChange={handleRadioChange}
                  value={transferDetails.transferRecurrence}
                  defaultChecked
                />
                <span>
                  <RefreshIcon /> Recurring Transfer <InfoIcon />
                </span>
              </label>
            </div>
            <label htmlFor="amount" className="visibly-hidden">
              Amount
            </label>
            <input
              type="number"
              className="global-modal-input"
              id="amount"
              value={transferDetails.amount}
              placeholder="Enter Amount"
              name="amount"
              required
              onChange={handleChange}
            />
            <div className="use-total-sales-amount">
              <label>
                <input
                  type="radio"
                  name="useTotalSalesAmount"
                  value={useTotalSalesAmount.current}
                  checked={useTotalSalesAmount.current}
                  readOnly
                  onClick={handleTotalSalesAmountChange}
                />
                <span>use total sales amount: N1,400,294</span>
              </label>
            </div>
            <hr />
            <p>Select a settlement type for how you want your cash disbursed</p>
            <div className="settlement-types">
              <label>
                <input
                  type="radio"
                  name="settlementType"
                  onChange={handleChange}
                  value="instant"
                  defaultChecked
                />
                <span>
                  <h2>Instant Settlement</h2>
                  <p>You get paid for every single sale instantly</p>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="settlementType"
                  onChange={handleChange}
                  value="endOfDay"
                />
                <span>
                  <h2>End of the day settlement</h2>
                  <p>Enter one or more accounts to send your earnings</p>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="settlementType"
                  onChange={handleChange}
                  value="endOfWeek"
                />
                <span>
                  <h2>End of the week settlement</h2>
                  <p>Enter one or more accounts to send your earnings</p>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="settlementType"
                  onChange={handleChange}
                  value="endOfMonth"
                />
                <span>
                  <h2>End of the Month</h2>
                  <p>Enter one or more accounts to send your earnings</p>
                </span>
              </label>
            </div>
            <ModalButtons
              secondaryButtonText={"Continue"}
              toggleModalDisplay={toggleModalDisplay}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
