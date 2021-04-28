import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

const FindServicesButton = ({ history }) => {
  return (
    <Fab
      size="large"
      variant="extended"
      color="primary"
      onClick={() => history.push("/services")}
    >
      <SearchIcon />
      Find Services
    </Fab>
  );
};

export default FindServicesButton;
