import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class CardData extends Component {
  state = { hovered: false };
  render() {
    const { data } = this.props;
    return (
      <Card
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        border={this.state.hovered ? "primary" : ""}
        style={{
          flex: "none",
          width: "25rem",
          height: "15rem",
          margin: ".5rem",
        }}
      >
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            URL:{" "}
            <a rel="noreferrer" target="_blank" href={"//" + data.url}>
              {data.url}
            </a>{" "}
            <br />
            Gender: {data.gender} <br />
            Ethnicity: {data.ethnicity} <br />
            Takes Insurance? {data.insurance ? "Yes" : "No"}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  handleHover = () => {
    this.setState({ hovered: !this.state.hovered });
  };
}
