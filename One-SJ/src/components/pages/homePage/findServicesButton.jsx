import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

const FindServicesButton = ({ history }) => {
  return (
    <Fab
      size="large"
      variant="extended"
      color="primary"
      style={{
        color: "white",
        fontSize: "1.25rem",
        fontWeight: "900",
        margin: ".5rem",
      }}
      onClick={() => history.push("/services")}
    >
      <SearchIcon style={{ marginRight: ".5rem", fontSize: "2rem" }} />
      Find Services
    </Fab>
  );
};

export default FindServicesButton;
