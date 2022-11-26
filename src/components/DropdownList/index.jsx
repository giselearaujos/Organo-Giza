import "./DropdownList.css";

const DropdownList = (props) => {
  const getOption = (event) => {
    props.changeState(event.target.value);
  };

  return (
    <div className="dropdownList">
      <label htmlFor="">{props.label}</label>
      <select
        onChange={getOption}
        required={props.validation}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
