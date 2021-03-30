import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/">OneSJ</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home" active>
          Home
        </Nav.Link>
        <Nav.Link href="services">Services</Nav.Link>
        <Nav.Link href="/">About Us</Nav.Link>
        <Nav.Link href="/">Disclaimer</Nav.Link>
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
