import InputBase from "@material-ui/core/InputBase";

const SearchBar = ({ onSearch }) => {
  return (
    <InputBase
      style={{
        display: "flex",
        justifyContent: "center",
        width: "400px",
        backgroundColor: "rgba(254, 215, 1, 0.1",
        border: "2px solid rgb(0, 127, 127)",
        borderRadius: "10px",
        padding: ".5rem",
        font: "1rem montserrat",
        color: "rgb(0, 127, 127)",
        margin: "2rem 0 1rem 0",
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
      placeholder="Search services..."
      onChange={(event) => {
        onSearch(event.target.value);
      }}
    />
  );
};

export default SearchBar;
