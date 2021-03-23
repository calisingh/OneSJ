import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RangeSlider from "react-bootstrap-range-slider";

// SFC for rendering the page size range slider
const PageSizeHandler = ({ pageSize, onPageSizeChange }) => {
  return (
    <Form>
      {/* Row and Columns used to make label appear on the left hand side */}
      <Form.Group as={Row}>
        <Form.Label column sm="5">
          Items Per Page: <b style={{ color: "#4C7DF7" }}>{pageSize}</b>
        </Form.Label>
        <Col sm="6">
          <RangeSlider
            min={2}
            max={15}
            value={pageSize}
            onChange={(e) => onPageSizeChange(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default PageSizeHandler;
