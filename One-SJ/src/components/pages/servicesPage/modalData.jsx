import Modal from "react-bootstrap/Modal";
import Map from "./map";
import Button from "react-bootstrap/Button";

// SFC for rendering the modal when a card is clicked. This will show a more in depth description of each service
const ModalData = ({ data, setShow, onClose }) => {
  return (
    <Modal show={setShow} onHide={() => onClose()} size="lg" centered>
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "rgb(0, 150, 140)",
          textShadow: "5px 5px 0px rgba(0,0,0,0.2)",
        }}
      >
        <Modal.Title
          style={{
            width: "100%",
            textAlign: "center",
            font: "2rem montserrat",
            fontWeight: "700",
            color: "white",
          }}
        >
          {data.provider_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          textAlign: "center",
          font: "1.5rem montserrat",
          fontWeight: "300",
          color: "rgb(0, 150, 140)",
          backgroundColor: "rgb(250, 250, 210)",
        }}
      >
        <Map service={data} />
        <div style={{ display: "grid", gap: "1rem" }}>
          <h5 style={{ marginTop: "1rem" }}>
            Website:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={data.web_link}
              className="filterAnchor"
            >
              {data.provider_name}
            </a>
          </h5>
          <h5>
            Address: {data.address}, {data.zip}
          </h5>
          <h5>Phone Number: {data.contact}</h5>
          <h5>Email: {data.email}</h5>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgb(0, 150, 140)" }}>
        <Button className="closeButton" onClick={() => onClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalData;
