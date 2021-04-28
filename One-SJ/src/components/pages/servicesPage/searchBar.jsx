import InputBase from "@material-ui/core/InputBase";

const SearchBar = ({ onSearch }) => {
  return (
    <InputBase
      className="searchBar boxShadow"
      placeholder="Search services..."
      onChange={(event) => {
        onSearch(event.target.value);
      }}
    />
  );
};

export default SearchBar;
