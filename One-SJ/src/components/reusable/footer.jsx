import { Navbar } from "react-bootstrap";

import logo from "../../img/logo.png";

import "../../css/footer.css";

const Footer = () => {
  return (
    <Navbar className="footerContainer boxShadow center">
      <div className="footerBrandContainer center">
        <img className="footer boxShadow" src={logo} />
        <h3>OneSJ</h3>
      </div>
      <hr className="footer" />
      <div className="footerLinksContainer center">
        <a href="/privacy-statement">Privacy Policy</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/feedback">Feedback</a>
      </div>
      <span className="footer">
        Copyright © 2021 OneSJ, LLC All Rights Reserved.
      </span>
    </Navbar>
  );
};

export default Footer;
