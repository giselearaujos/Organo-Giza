import "./Footer.css";
import fb from "../../../image/fb.png";
import tw from "../../../image/tw.png";
import ig from "../../../image/ig.png";
import logo from "../../../image/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <span className="social-network">
        <img src={fb} alt="Logo Facebook" />
        <img src={tw} alt="Logo Twitter" />
        <img src={ig} alt="Instagram" />
      </span>
      <span>
        <img src={logo} alt="Logo Organo" />
      </span>
      <h3 className="footer-text">
        Desenvolvido por{" "}
        <a href="https://github.com/giselearaujos">Gisele Araujo Silva 🚀</a>
      </h3>
    </footer>
  );
};

export default Footer;
