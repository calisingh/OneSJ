import MoreInfoButton from "./moreInfoButton";
import GetStartedButton from "./getStartedButton";
import { useHistory } from "react-router-dom";

const WelcomeBanner = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        placeItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          font: "1.5rem montserrat",
          width: "75%",
          minWidth: "450px",
          backgroundColor: "rgba(254, 215, 1, 0.1)",
          borderRadius: "15px",
          border: "2px solid rgb(0, 127, 127)",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          padding: "3rem",
          marginBottom: "4.5rem",
        }}
      >
        <h3
          style={{
            fontWeight: "900",
            color: "white",
            textShadow: "5px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          Welcome to OneSJ!
        </h3>
        <hr
          style={{
            borderTop: "5px solid black",
            borderRadius: "20px",
            opacity: "0.5",
            width: "75%",
          }}
        />
        <p
          style={{
            color: "rgb(0, 127, 127)",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          OneSJ is a website that aims to quickly bring Mental Health resources
          to the San Jose youth!
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            placeItems: "center",
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
