import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";

const NavigationBar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      fixed="top"
      style={{ borderRadius: "1px" }}
    >
      <Navbar.Brand href="/">OneSJ</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" active>
          Home
        </Nav.Link>
        <Nav.Link href="services">Services</Nav.Link>
        <Nav.Link href="aboutUs">About Us</Nav.Link>
        <Nav.Link href="disclaimer">Disclaimer</Nav.Link>
        <Nav.Link href="/">Contact Us</Nav.Link>
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
