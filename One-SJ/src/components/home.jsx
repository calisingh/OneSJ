import React, { Component } from "react";
import background from "../img/ColorfulBackground.jpg";
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
            height: "170vh",
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
              <HelpBanner />
              <GetStartedButton history={this.props.history} />
            <div
              style={{
                position: "absolute",
                width: "100%",
                marginTop: "0%",
              }}
            >
              <EmergencyBanner />
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
