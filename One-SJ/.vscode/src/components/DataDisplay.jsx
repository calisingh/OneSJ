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
          justifyContent: "flex-start",
          width: "75%",
          border: "2px solid black",
          margin: "0 0 1% 25%",
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
