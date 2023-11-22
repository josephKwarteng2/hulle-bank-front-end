import "./ModalButtons.css";

const ModalButtons = (props) => {
  const { secondaryButtonText, toggleModalDisplay, toggleContinue } = props;
  return (
    <div className="modal-buttons-container">
      <button className="primary" onClick={toggleModalDisplay}>
        Cancel
      </button>
      <button className="secondary" onClick={toggleContinue}>
        {secondaryButtonText}
      </button>
    </div>
  );
};

export default ModalButtons;
