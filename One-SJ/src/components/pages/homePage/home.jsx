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
        className="center bgGradientTop"
        ref={top}
        style={{
          height: "95vh",
        }}
      >
        <OneSJHeader />
        <WelcomeBanner />
      </div>
      <div
        className="center bgGradientBottom"
        id="information"
        style={{
          height: "175vh",
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
          className="center"
          ref={emergency}
          style={{
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
