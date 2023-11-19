import "./SettlementsCard.css";

const SettlementsCard = ({ title, value }) => {
  return (
    <div className="settlements-card">
      <p>{title}</p>
      <h1>{value}</h1>
    </div>
  );
};

export default SettlementsCard;
