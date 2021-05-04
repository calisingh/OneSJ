import MoreInfoButton from "./moreInfoButton";
import GetStartedButton from "./getStartedButton";
import { useHistory } from "react-router-dom";

const WelcomeBanner = () => {
  return (
    <div className="center" style={{ margin: "1rem" }}>
      <div id="welcomeBanner" className="infoBox center">
        <h3 className="textShadow">Welcome to OneSJ!</h3>
        <hr />
        <p>
          OneSJ is a website that aims to quickly bring Mental Health resources
          to the San Jose youth!
        </p>
        <div id="welcomeBannerButtonsContainer" className="center">
          <MoreInfoButton />
          <GetStartedButton history={useHistory()} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
