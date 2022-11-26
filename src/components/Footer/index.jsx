import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <span className="social-network">
        <img src="../../images/fb.png" alt="Logo Facebook" />
        <img src="../../images/tw.png" alt="Logo Twitter" />
        <img src="../../images/ig.png" alt="Instagram" />
      </span>
      <span>
        <img src="../../images/logo.png" alt="Logo Organo" />
      </span>
      <h3 className="footer-text">
        Desenvolvido por{" "}
        <a href="https://github.com/giselearaujos">Gisele Araujo Silva 🚀</a>
      </h3>
    </footer>
  );
};

export default Footer;
