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
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
          onClick={() => this.setState({ showModal: true })}
          border={hovered ? "primary" : ""}
          style={{
            flex: "0 0 25rem",
            margin: "1rem 1rem 1rem 1rem",
            cursor: "pointer",
            textAlign: "center",
            font: "montserrat",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "rgb(0, 150, 140)",
              color: "white",
              fontWeight: "500",
              textShadow: "5px 5px 0px rgba(0,0,0,0.2)",
              fontSize: "1.5rem",
            }}
          >
            Mental Health
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: "rgb(250, 250, 210)",
              color: "rgb(0, 150, 140)",
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
          >
            <Card.Title
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                justifySelf: "center",
                alignSelf: "start",
              }}
            >
              {data.provider_name}
            </Card.Title>
            <Card.Text
              style={{
                padding: "1rem",
                lineHeight: "2",
                fontSize: "1.1rem",
                fontWeight: "500",
              }}
            >
              {data.notes}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
