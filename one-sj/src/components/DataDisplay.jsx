import React, { Component } from "react";
import CardData from "./CardData";
import { CardDeck } from "react-bootstrap";

class DataDisplay extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <CardDeck
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {data.map((data) => (
          <CardData key={data.title} data={data} />
        ))}
      </CardDeck>
    );
  }
}

export default DataDisplay;
