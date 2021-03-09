import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import { getAPIData } from "../mock-data/mock-services";

export default class JustinsComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Justin's Component</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <div
          style={{
            position: "absolute",
            border: "5px solid black",
            left: "15%",
            top: "15%",
          }}
        >
          <DataDisplay data={getAPIData()} />
        </div>
      </div>
    );
  }
}
