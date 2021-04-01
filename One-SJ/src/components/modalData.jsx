import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// SFC for rendering the modal when a card is clicked. This will show a more in depth description of each service
const ModalData = ({ data, setShow, onClose }) => {
  return (
    <Modal
      show={setShow}
      onHide={() => onClose()}
      size="lg"
      animation={false}
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <Modal.Title style={{ width: "100%", textAlign: "center" }}>
          <a rel="noreferrer" target="_blank" href={data.web_link}>
            {data.provider_name}
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          textAlign: "center",
          fontSize: "20px",
          backgroundColor: "rgba(2, 117, 216, 0.25)",
        }}
      >
        Address: {data.address}, {data.zip} <br />
        Phone #: {data.contact} <br />
        Email: {data.email} <br />
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <Button onClick={() => onClose()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalData;
