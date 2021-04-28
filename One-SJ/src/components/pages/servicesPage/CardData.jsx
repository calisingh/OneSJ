import { Component } from "react";
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
      <>
        {/* Renders the modal only when the card is clicked */}
        <ModalData
          data={data}
          setShow={showModal}
          onClose={this.handleModalClose}
        />
        <Card
          className="data boxShadow"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
          onClick={() => this.setState({ showModal: true })}
          border={hovered ? "primary" : ""}
        >
          <Card.Header className="textShadow">Mental Health</Card.Header>
          <Card.Body className="center">
            <Card.Title>{data.provider_name}</Card.Title>
            <Card.Text>{data.notes}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
