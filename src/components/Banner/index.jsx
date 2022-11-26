import "./Banner.css";
import banner from "../../../image/banner.png";

const Banner = () => {
  return (
    <header className="banner">
      <img src={banner} alt="Imagem inicial do projeto organo" />
    </header>
  );
};

export default Banner;
