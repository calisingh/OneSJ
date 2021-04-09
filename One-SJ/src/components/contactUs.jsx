import React, { Component } from "react";
import background from "../img/Black.jpg";
import NavigationBar from "./navigationBar";
import Footer from "./footer";
import OneSJHeader from "./onesjHeader";
import ContactUsParagraph from "./contactUsParagraph";

export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div
          style={{
            backgroundImage: `url(${background})`,
            height: "110vh",
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
              <ContactUsParagraph />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
