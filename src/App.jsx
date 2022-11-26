import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programacão",
      primaryColor: "#f52323",
      secondaryColor: "#f739394b",
    },
    {
      name: "Back-End",
      primaryColor: "#865935",
      secondaryColor: "#caa48571",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  const [cooperators, setCooperators] = useState([]);

  const newCooperator = (cooperator) => {
    setCooperators([...cooperators, cooperator]);
  };
  return (
    <>
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        registrationCooperator={(cooperator) => newCooperator(cooperator)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          nameTeam={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          cooperator={cooperators.filter(
            (cooperator) => cooperator.team === team.name
          )}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
