import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalData from "./modalData";

// Component that renders cards based on the data given too it
export default class CardData extends Component {
  state = { hovered: false, showModal: false };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { data } = this.props;
    const { hovered, showModal } = this.state;

    return (
      <React.Fragment>
        {/* Renders the modal only when the card is clicked */}
        <ModalData
          data={data}
          setShow={showModal}
          onClose={this.handleModalClose}
        />
        <Card
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
          onClick={() => this.setState({ showModal: true })}
          border={hovered ? "primary" : ""}
          style={{
            flex: "0 0 25rem",
            margin: "1rem 1rem 1rem 1rem",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Card.Header>Mental Health</Card.Header>
          <Card.Body>
            <Card.Title>{data.provider_name}</Card.Title>
            <Card.Text>{data.notes}</Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
