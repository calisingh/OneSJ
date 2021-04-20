import background from "../../../img/bright-squares.png";
import sanjose from "../../../img/SanJose.jfif";
import { createRef } from "react";
import Snacks from "./snacks";
import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import WelcomeBanner from "./welcomeBanner";
import MoreInfoBanner from "./moreInfoBanner";
import EmergencyBanner from "./emergencyBanner";
import Footer from "../../reusable/footer";
import "../../../css/home.css";

const Home = () => {
  // Creating refs for Snacks so they can scroll to correct part of page when clicked
  let top = createRef();
  let emergency = createRef();
  return (
    <>
      {/* Snacks are the pop ups that appear on the home page */}
      <Snacks topRef={top} emergencyRef={emergency} />
      <NavigationBar />
      <div
        ref={top}
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
          ref={emergency}
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
