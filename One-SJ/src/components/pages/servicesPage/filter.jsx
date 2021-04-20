import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// SFC for rendering all the checkboxes for the filter
const Filter = ({ categories, onFilter }) => {
  return (
    <FormGroup style={{ alignContent: "center" }}>
      {/* Create a checkbox for each category provided */}
      {categories.map((category) => (
        <FormControlLabel
          style={{ flex: "1 1 auto" }}
          control={
            <Checkbox
              name={category.property_name}
              color="primary"
              size="small"
              onChange={(e) => onFilter(e)}
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
