import React, { Component } from "react";
import background from "../img/ColorfulBackground.jpg";
import NavigationBar from "./navigationBar";
import Footer from "./footer";
import OneSJHeader from "./onesjHeader";
import AboutUsParagraph from "./aboutUsParagraph";

export default class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div
          style={{
            backgroundImage: `url(${background})`,
            height: "130vh",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.15)",
              height: "50%",
            }}
          >
            <OneSJHeader />
            <div
              style={{
                position: "absolute",
                width: "100%",
                marginTop: "10%",
              }}
            >
              <AboutUsParagraph />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}