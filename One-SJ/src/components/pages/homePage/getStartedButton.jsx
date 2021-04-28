import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

const GetStartedButton = ({ history }) => {
  return (
    <Fab
      size="large"
      variant="extended"
      color="secondary"
      onClick={() => history.push("/services")}
    >
      <FavoriteIcon />
      Get Started
    </Fab>
  );
};

export default GetStartedButton;
