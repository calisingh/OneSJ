import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Filter extends Component {
  state = {};
  render() {
    const { categories, onFilter } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <Form>
            <div key={category.property_name} className="mb-3">
              <Form.Check
                type="checkbox"
                id={category.property_name}
                name="category"
                label={category.name}
                onClick={() => onFilter(this.findCheckedCategories())}
              ></Form.Check>
            </div>
          </Form>
        ))}
      </div>
    );
  }

  findCheckedCategories = () => {
    let checkedCategories = [];
    const checked = document.querySelectorAll("input[name=category]:checked");
    checked.forEach((checkbox) => {
      checkedCategories.push(checkbox.id);
    });
    return checkedCategories;
  };
}
