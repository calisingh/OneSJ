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
            height: "150vh",
            backgroundSize: "cover",
          }}
        >
          <OneSJHeader />
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              height: "115%",
              width: "100%",
              top: "385px",
            }}
          >
            <HelpBanner />
            <GetStartedButton history={this.props.history} />
            <EmergencyBanner />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
