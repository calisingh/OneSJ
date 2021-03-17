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
          flex: "0 0 25rem",
          marginBottom: "1rem",
        }}
      >
        <Card.Header>{data.resource}</Card.Header>
        <Card.Body>
          <Card.Title>{data.provider_name}</Card.Title>
          <Card.Text>
            URL:
            <a rel="noreferrer" target="_blank" href={"//" + data.web_link}>
              {data.web_link}
            </a>
            <br />
            Adress: {data.address}, {data.zip} <br />
            Phone #: {data.contact} <br />
            Email: {data.email} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  handleHover = () => {
    const hover = this.state.hovered ? false : true;
    this.setState({ hovered: hover });
  };
}
