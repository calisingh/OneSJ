import logo from "../../../img/logo.png";
import head from "../../../img/headsilhouette.svg";
import FindServicesButton from "./findServicesButton";
import { useHistory } from "react-router-dom";

const MoreInfoBanner = () => {
  return (
    <div
      className="center"
      style={{
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <img
        className="boxShadow"
        src={logo}
        style={{
          maxWidth: "550px",
          maxHeight: "550px",
          borderRadius: "25px",
        }}
      />
      <div
        className="infoBox center"
        style={{
          width: "90%",
        }}
      >
        <h3>HELP IS OUT THERE!</h3>
        <hr
          style={{
            width: "75%",
          }}
        />
        <p>
          OneSJ is a website that points youth/young adults in San José to
          relevant mental health support options. On our website, we provide
          information on mental and physical health resources in and around the
          Bay Area, which is updated every month.
        </p>
        <FindServicesButton history={useHistory()} />
      </div>
      <div
        className="infoBox center"
        style={{
          width: "90%",
        }}
      >
        <h3>LOOKING FOR OTHER RESOURCES?</h3>
        <hr
          style={{
            width: "100%",
          }}
        />
        <p>
          Other categories are in-progress! We plan to eventually expand with
          other categories of services such as food, housing, and financial
          support. We are working with our partners to bring together the best
          available and up-to-date information in an easy-to-use user interface.
        </p>
      </div>
      <img
        src={head}
        style={{
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      />
    </div>
  );
};

export default MoreInfoBanner;
