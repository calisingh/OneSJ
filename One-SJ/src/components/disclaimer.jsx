import React, { Component } from "react";
import background from "../img/Black.jpg";
import NavigationBar from "./navigationBar";
import Footer from "./footer";
import OneSJHeader from "./onesjHeader";
import DisclaimerParagraph from "./disclaimerParagraph";

export default class Disclaimer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div
          style={{
            backgroundImage: `url(${background})`,
            height: "160vh",
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
              <DisclaimerParagraph />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
