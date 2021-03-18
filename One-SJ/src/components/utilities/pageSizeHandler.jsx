import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class PageSizeHandler extends Component {
  render() {
    const { pageSize, onPageSizeChange } = this.props;
    return (
      <Form>
        <Form.Group>
          <Form.Label>Current Page Size: {pageSize}</Form.Label>
          <Form.Control
            type="range"
            id="rangeSlider"
            min="2"
            max="15"
            value={[pageSize]}
            onChange={() =>
              this.setState({
                pageSize: onPageSizeChange("rangeSlider"),
              })
            }
          ></Form.Control>
        </Form.Group>
      </Form>
    );
  }
}
