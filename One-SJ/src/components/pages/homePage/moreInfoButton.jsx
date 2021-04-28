import Fab from "@material-ui/core/Fab";
import InfoIcon from "@material-ui/icons/Info";

const MoreInfoButton = () => {
  return (
    <Fab size="large" variant="extended" color="primary" href="#information">
      <InfoIcon />
      More Info
    </Fab>
  );
};

export default MoreInfoButton;
