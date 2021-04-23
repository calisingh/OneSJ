import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "../../../css/filter.css";

// SFC for rendering all the checkboxes for the filter
const Filter = ({ categories, onFilter }) => {
  return (
    <FormGroup className="filter">
      {/* Create a checkbox for each category provided */}
      {categories.map((category) => (
        <FormControlLabel
          style={{ flex: "1 1 auto" }}
          control={
            <Checkbox
              name={category.property_name}
              size="small"
              onChange={(e) => onFilter(e.target.name)}
            />
          }
          label={category.name}
          key={category.property_name}
        />
      ))}
    </FormGroup>
  );
};

export default Filter;
