import { Navbar } from "react-bootstrap";
import logo from "../../img/logo.png";
import "../../css/footer.css";

const Footer = () => {
  return (
    <Navbar className="footerContainer center boxShadow">
      <div
        className="center"
        style={{
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <img
          className="boxShadow"
          src={logo}
          alt=""
          style={{
            maxWidth: "75px",
            borderRadius: "15px",
          }}
        />
        <h3>OneSJ</h3>
      </div>
      <h6 className="footer">
        Special thanks to{" "}
        <a rel="noopener noreferrer" target="_blank" href="https://carto.com">
          Carto.com
        </a>{" "}
        and{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://bayareacommunity.org"
        >
          BayAreaCommunity.org
        </a>{" "}
        for helping bring this website to life!
      </h6>
      <hr
        style={{
          borderTop: "5px solid rgba(255, 236, 69, 0.7)",
          width: "50%",
        }}
      />
      <div
        className="center"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        <a href="/privacy-statement">Privacy Policy</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/feedback">Feedback</a>
      </div>
      <span
        style={{
          color: "white",
          font: ".75rem montserrat",
          textAlign: "center",
        }}
      >
        Copyright © 2021 OneSJ, LLC All Rights Reserved.
      </span>
    </Navbar>
  );
};

export default Footer;
