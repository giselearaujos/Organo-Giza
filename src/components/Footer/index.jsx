import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <span className="social-network">
        <img src="../../../image/fb.png" alt="Logo Facebook" />
        <img src="../../../image/tw.png" alt="Logo Twitter" />
        <img src="../../../image/ig.png" alt="Instagram" />
      </span>
      <span>
        <img src="../../../image/logo.png" alt="Logo Organo" />
      </span>
      <h3 className="footer-text">
        Desenvolvido por{" "}
        <a href="https://github.com/giselearaujos">Gisele Araujo Silva 🚀</a>
      </h3>
    </footer>
  );
};

export default Footer;
