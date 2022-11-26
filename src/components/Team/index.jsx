import Card from "../Card";
import "./Team.css";

const Team = (props) => {
  return (
    props.cooperator.length > 0 && (
      <section
        className="section"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.nameTeam}</h3>
        <div className="wrapper-card">
          {props.cooperator.map((cooperator) => (
            <Card
              key={cooperator.name}
              image={cooperator.image}
              name={cooperator.name}
              office={cooperator.office}
              backgroundColorCard={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
