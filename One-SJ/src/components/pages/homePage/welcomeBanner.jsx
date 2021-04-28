import MoreInfoButton from "./moreInfoButton";
import GetStartedButton from "./getStartedButton";
import { useHistory } from "react-router-dom";

const WelcomeBanner = () => {
  return (
    <div className="center">
      <div
        className="infoBox center"
        style={{
          width: "75%",
        }}
      >
        <h3 className="textShadow">Welcome to OneSJ!</h3>
        <hr
          style={{
            width: "75%",
          }}
        />
        <p>
          OneSJ is a website that aims to quickly bring Mental Health resources
          to the San Jose youth!
        </p>
        <div
          className="center"
          style={{
            gridTemplateColumns: "1fr 1fr",
            width: "100%",
          }}
        >
          <MoreInfoButton />
          <GetStartedButton history={useHistory()} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
