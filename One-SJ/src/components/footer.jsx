import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      style={{
        width: "100%",
        borderRadius: "1px",
      }}
    >
      <Nav className="m-auto">Copyright © 2021 OneSJ</Nav>
    </Navbar>
  );
};

export default Footer;
