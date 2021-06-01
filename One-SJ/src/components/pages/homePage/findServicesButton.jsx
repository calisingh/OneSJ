import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

const FindServicesButton = ({ history }) => {
  return (
    <Fab
      size="large"
      variant="extended"
      color="primary"
      // Using history to direct user to different routes
      onClick={() => history.push("/services")}
    >
      <SearchIcon />
      Find Services
    </Fab>
  );
};

export default FindServicesButton;
