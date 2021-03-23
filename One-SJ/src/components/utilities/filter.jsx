import React from "react";
import Form from "react-bootstrap/Form";

// SFC for rendering all the checkboxes for the filter
const Filter = ({ categories, onFilter }) => {
  return (
    <React.Fragment>
      {/* Create a checkbox for each category provided */}
      {categories.map((category) => (
        <Form key={category.property_name}>
          <div className="mb-2">
            <Form.Check
              type="checkbox"
              id={category.property_name}
              name="category"
              label={category.name}
              onClick={() => onFilter(findCheckedCategories())}
            ></Form.Check>
          </div>
        </Form>
      ))}
    </React.Fragment>
  );
};

// Search all checkboxes with name="category" to see if they are checked
const findCheckedCategories = () => {
  let checkedCategories = [];
  const checked = document.querySelectorAll("input[name=category]:checked");
  checked.forEach((checkbox) => {
    // Return the array of category property_names stored in id
    checkedCategories.push(checkbox.id);
  });
  return checkedCategories;
};

export default Filter;
