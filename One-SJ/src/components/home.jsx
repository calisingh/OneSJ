import React, { Component } from "react";
import background from "../img/SJSU_Building.jpg";
import NavigationBar from "./navigationBar";
import Footer from "./footer";
import HelpBanner from "./helpBanner";
import OneSJHeader from "./onesjHeader";
import GetStartedButton from "./getStartedButton";
import EmergencyBanner from "./emergencyBanner";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div
          style={{
            backgroundImage: `url(${background})`,
            height: "215vh",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.15)",
              height: "100%",
            }}
          >
            <OneSJHeader />
            <div
              style={{
                position: "absolute",
                width: "100%",
                marginTop: "33%",
              }}
            >
              <HelpBanner />
              <GetStartedButton history={this.props.history} />
              <EmergencyBanner />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
