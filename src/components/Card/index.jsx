import "./Card.css";

const Card = ({ image, name, office, backgroundColorCard }) => {
  return (
    <section className="card">
      <div className="header" style={{ backgroundColor: backgroundColorCard }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </section>
  );
};

export default Card;
