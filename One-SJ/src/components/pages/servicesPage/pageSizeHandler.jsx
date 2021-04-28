import Form from "react-bootstrap/Form";
import RangeSlider from "react-bootstrap-range-slider";

// SFC for rendering the page size range slider
const PageSizeHandler = ({ pageSize, onPageSizeChange }) => {
  return (
    <Form className="pageSizeHandler">
      {/* Row and Columns used to make label appear on the left hand side */}
      <Form.Group>
        <Form.Label>
          Items Per Page:{" "}
          <b style={{ color: "rgb(0, 127, 127)", fontSize: "1.25rem" }}>
            {pageSize}
          </b>
        </Form.Label>
        <RangeSlider
          min={4}
          max={15}
          value={pageSize}
          onChange={(e) => onPageSizeChange(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default PageSizeHandler;
