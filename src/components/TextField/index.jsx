import "./TextField.css";

const TextField = (props) => {
  const getInput = (event) => {
    props.changeState(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        required={props.validation}
        onChange={getInput}
        value={props.value}
      />
    </div>
  );
};

export default TextField;
