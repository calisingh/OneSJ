import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// Slide is the animation I am using for the snacks
import Slide from "@material-ui/core/Slide";
import "../../../css/snacks.css";

// Controls the pop ups for the home page
const InsuredSnack = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <Snackbar
        className="snack"
        // Controls where snack pops up
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={15000}
        open={active}
        // Don't close snack if user clicks away
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setActive(false);
        }}
        // Controls transition animations
        TransitionComponent={Slide}
      >
        <SnackbarContent
          style={{
            backgroundColor: "#0275d8",
          }}
          message={"Uninsured? Click here"}
          onClick={() => {
            setActive(false);
            window.open(
              "https://www.dmhc.ca.gov/HealthCareinCalifornia/LoworNo-IncomeOptionsandTheUninsured.aspx",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        />
      </Snackbar>
    </>
  );
};

export default InsuredSnack;
