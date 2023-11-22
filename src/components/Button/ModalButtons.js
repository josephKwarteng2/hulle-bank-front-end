import "./ModalButtons.css";

const ModalButtons = (props) => {
  const { secondaryButtonText, toggleModalDisplay } = props;
  return (
    <div className="modal-buttons-container" type="button">
      <button className="primary" onClick={toggleModalDisplay}>
        Cancel
      </button>
      <button className="secondary" type="submit">
        {secondaryButtonText}
      </button>
    </div>
  );
};

export default ModalButtons;
