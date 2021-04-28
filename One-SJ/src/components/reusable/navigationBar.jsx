import { Navbar, Nav } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";
import { useLocation } from "react-router-dom";
import "../../css/navigationBar.css";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <Navbar className="navigationBar" fixed="top">
      <Navbar.Brand className="textShadow" href="/">
        OneSJ
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" active={location.pathname === "/"}>
          Home
        </Nav.Link>
        <Nav.Link href="/services" active={location.pathname === "/services"}>
          Services
        </Nav.Link>
        <Nav.Link href="/about-us" active={location.pathname === "/about-us"}>
          About Us
        </Nav.Link>
        <Nav.Link
          href="/disclaimer"
          active={location.pathname === "/disclaimer"}
        >
          Disclaimer
        </Nav.Link>
        <Nav.Link
          href="/contact-us"
          active={location.pathname === "/contact-us"}
        >
          Contact Us
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="/">
          <LanguageIcon
            style={{ marginRight: ".25rem", marginBottom: "2px" }}
          />
          English
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
