import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import { getAPIData } from "../mock-data/mock-services";
import axios from "axios";

export default class JustinsComponent extends Component {
  state = {};
  render() {
    const apiLink =
      "https://clay-g.carto.com/api/v2/sql?api_key=RZ-dBhbd7_qbuXhFzrNKsA&q=SELECT * FROM bay_area_health";
    axios.get(apiLink).then((data) => {
      console.log(data);
    });
    return (
      <div>
        <div
          style={{
            //position: "relative",
            border: "2px solid green",
            width: "100%",
            height: "40%",
          }}
        >
          <Link style={{ float: "left" }} to="/">
            Home
          </Link>
          <h1 style={{ textAlign: "center" }}>NAVBAR</h1>
        </div>

        <div>
          <div
            style={{
              //position: "absolute",
              width: "25%",
              height: "85.5%",
              border: "2px solid blue",
              float: "left",
            }}
          >
            <h1>Filter</h1>
          </div>
          <DataDisplay data={getAPIData()} />
        </div>
      </div>
    );
  }
}
