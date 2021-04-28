import Modal from "react-bootstrap/Modal";
import Map from "./map";
import Button from "react-bootstrap/Button";

// SFC for rendering the modal when a card is clicked. This will show a more in depth description of each service
const ModalData = ({ data, setShow, onClose }) => {
  return (
    <Modal show={setShow} onHide={() => onClose()} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="textShadow">{data.provider_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Map service={data} />
        <div className="center" style={{ marginTop: "1rem" }}>
          <h5>
            Website:{" "}
            <a
              className="data"
              rel="noreferrer"
              target="_blank"
              href={data.web_link}
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
      <Modal.Footer>
        <Button className="modalFooterCloseButton" onClick={() => onClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalData;
