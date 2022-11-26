import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.registrationCooperator({
      name,
      office,
      image,
      team,
    });
    setName("");
    setOffice("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          label="Name"
          placeholder="Digite o seu nome"
          validation={true}
          value={name}
          changeState={(value) => setName(value)}
        />
        <TextField
          label="Cargo"
          placeholder="Digite o seu cargo"
          validation={true}
          value={office}
          changeState={(value) => setOffice(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Insira a URL da imagem"
          value={image}
          changeState={(value) => setImage(value)}
        />
        <DropdownList
          label="Time"
          itens={props.teams}
          validation={true}
          value={team}
          changeState={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
