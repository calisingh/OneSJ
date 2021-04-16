import background from "../img/bright-squares.png";
import sanjose from "../img/SanJose.jfif";
import NavigationBar from "./navigationBar";
import OneSJHeader from "./onesjHeader";
import WelcomeBanner from "./welcomeBanner";
import MoreInfoBanner from "./moreInfoBanner";
import EmergencyBanner from "./emergencyBanner";
import Footer from "./footer";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Slide from "@material-ui/core/Slide";
import { useState, useEffect } from "react";

const Home = () => {
  const [emergency, setEmergency] = useState(true);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 500;
    if (bottom) {
      setScrollTop(true);
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
        onClose={() => setEmergency(false)}
        TransitionComponent={Slide}
      >
        <SnackbarContent
          style={{
            backgroundColor: "rgb(196, 30, 58)",
            font: "montserrat",
            fontWeight: "500",
            fontSize: "1rem",
            justifyContent: "center",
          }}
          message={
            <a href="#emergency" onClick={() => setEmergency(false)}>
              Have an emergency? Click here.
            </a>
          }
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={scrollTop}
        TransitionComponent={Slide}
        onClose={() => setScrollTop(false)}
      >
        <SnackbarContent
          style={{
            font: "montserrat",
            fontWeight: "500",
            fontSize: "1rem",
            justifyContent: "center",
          }}
          message={
            <a href="#top" onClick={() => setScrollTop(false)}>
              Scroll back to top
            </a>
          }
        />
      </Snackbar>
      <NavigationBar />
      <div
        id="top"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "rgb(250, 250, 210)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1rem",
          placeItems: "center",
          height: "95vh",
        }}
      >
        <OneSJHeader />
        <WelcomeBanner />
      </div>
      <div
        id="information"
        style={{
          height: "175vh",
          background:
            "linear-gradient(to top, rgb(0, 150, 140), rgb(250, 250, 210))",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1rem",
          placeItems: "center",
        }}
      >
        <MoreInfoBanner />
      </div>
      <div
        style={{
          backgroundImage: `url(${sanjose})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "70vh",
        }}
      >
        <div
          id="emergency"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            placeItems: "center",
            paddingTop: "3%",
          }}
        >
          <EmergencyBanner />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
