import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Filter extends Component {
  render() {
    const { categories, onFilter } = this.props;
    return categories.map((category) => {
      <Form>
        <div key={category.name} className="mb-3">
          <Form.Check
            type="checkbox"
            id={category.name}
            name="category"
            label={category.name}
            onChange={onFilter(this.findCheckedCategories())}
          ></Form.Check>
        </div>
      </Form>;
    });
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
