import React, { Component } from "react";
import background from "../img/SJSU_Building.jpg";
import NavigationBar from "./navigationBar";
import Footer from "./footer";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundSize: "cover",
          // filter: "grayscale(100%)",
        }}
      >
        <NavigationBar />
        <Footer />
      </div>
    );
  }
}
