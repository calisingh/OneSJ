import Fab from "@material-ui/core/Fab";
import InfoIcon from "@material-ui/icons/Info";

const MoreInfoButton = () => {
  return (
    <Fab
      size="large"
      variant="extended"
      color="primary"
      href="#information"
      style={{
        color: "white",
        fontSize: "1.25rem",
        fontWeight: "900",
      }}
    >
      <InfoIcon style={{ marginRight: ".5rem", fontSize: "2rem" }} />
      More Info
    </Fab>
  );
};

export default MoreInfoButton;
