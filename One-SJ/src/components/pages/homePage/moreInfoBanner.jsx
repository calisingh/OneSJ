import logo from "../../../img/logo.png";
import head from "../../../img/headsilhouette.svg";
import FindServicesButton from "./findServicesButton";
import { useHistory } from "react-router-dom";

const MoreInfoBanner = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        placeItems: "center",
      }}
    >
      <img
        src={logo}
        alt=""
        style={{
          maxWidth: "550px",
          maxHeight: "550px",
          borderRadius: "25px",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(254, 215, 1, 0.1)",
          borderRadius: "15px",
          border: "2px solid rgb(0, 127, 127)",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          padding: "3rem",
          margin: "2rem",
          textAlign: "center",
          font: "1.5rem montserrat",
          width: "90%",
          minWidth: "600px",
        }}
      >
        <h3
          style={{
            fontWeight: "900",
            color: "white",
            textShadow: "5px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          HELP IS OUT THERE!
        </h3>
        <hr
          style={{
            borderTop: "5px solid black",
            borderRadius: "20px",
            opacity: "0.5",
            width: "75%",
          }}
        />
        <p style={{ color: "black", lineHeight: "1.6" }}>
          OneSJ is a website that points youth/young adults in San José to
          relevant mental health support options. On our website, we provide
          information on mental and physical health resources in and around the
          Bay Area, which is updated every month.
        </p>
        <FindServicesButton history={useHistory()} />
      </div>
      <div
        style={{
          backgroundColor: "rgba(254, 215, 1, 0.1)",
          borderRadius: "15px",
          border: "2px solid rgb(0, 127, 127)",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          padding: "3rem",
          margin: "2rem",
          font: "1.5rem montserrat",
          textAlign: "center",
          width: "90%",
          minWidth: "600px",
        }}
      >
        <h3
          style={{
            fontWeight: "900",
            color: "white",
            textShadow: "5px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          LOOKING FOR OTHER RESOURCES?
        </h3>
        <hr
          style={{
            borderTop: "5px solid black",
            borderRadius: "20px",
            opacity: "0.5",
            width: "100%",
          }}
        />
        <p style={{ color: "black", lineHeight: "1.6" }}>
          Other categories are in-progress! We plan to eventually expand with
          other categories of services such as food, housing, and financial
          support. We are working with our partners to bring together the best
          available and up-to-date information in an easy-to-use user interface.
        </p>
      </div>
      <img
        src={head}
        alt=""
        style={{
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      />
    </div>
  );
};

export default MoreInfoBanner;
