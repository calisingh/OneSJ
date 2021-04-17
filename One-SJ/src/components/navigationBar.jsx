import React from "react";
import "../css/navigationBar.css";
import { Navbar, Nav } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";

const NavigationBar = () => {
  return (
    <Navbar
      fixed="top"
      style={{
        borderRadius: "1px",
        backgroundColor: "rgba(0, 127, 127, 0.95)",
      }}
    >
      <Navbar.Brand
        href="/"
        style={{ textShadow: "5px 5px 0px rgba(0,0,0,0.2)" }}
      >
        OneSJ
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" active>
          Home
        </Nav.Link>
        <Nav.Link href="services">Services</Nav.Link>
        <Nav.Link href="aboutUs">About Us</Nav.Link>
        <Nav.Link href="disclaimer">Disclaimer</Nav.Link>
        <Nav.Link href="privacy">Privacy Statement</Nav.Link>
        <Nav.Link href="contactUs">Contact Us</Nav.Link>
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
