import { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// Slide is the animation I am using for the snacks
import Slide from "@material-ui/core/Slide";
import "../../../css/snacks.css";

// Controls the pop ups for the home page
const Snacks = ({ topRef, emergencyRef }) => {
  const [emergency, setEmergency] = useState(true);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 500;
    if (bottom) {
      setScrollTop(true);
      setEmergency(false);
    } else if (!scrollTop) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={15000}
        open={emergency}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setEmergency(false);
        }}
        TransitionComponent={Slide}
      >
        <SnackbarContent
          style={{
            backgroundColor: "rgb(196, 30, 58)",
          }}
          message={"Have an emergency? Click here"}
          onClick={() => {
            if (emergencyRef.current) {
              emergencyRef.current.scrollIntoView();
            }
          }}
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={scrollTop}
        TransitionComponent={Slide}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setScrollTop(false);
        }}
      >
        <SnackbarContent
          message={"Scroll back to top"}
          onClick={() => {
            if (topRef.current) {
              topRef.current.scrollIntoView();
            }
          }}
        />
      </Snackbar>
    </>
  );
};

export default Snacks;
