import logo from "../../../img/logo.png";
import head from "../../../img/headsilhouette.svg";
import FindServicesButton from "./findServicesButton";
import { useHistory } from "react-router-dom";

const MoreInfoBanner = () => {
  return (
    <div className="informationBanner center">
      <div
        id="more-info"
        className="infoBox center"
        style={{
          width: "90%",
        }}
      >
        <h3>HELP IS OUT THERE!</h3>
        <hr />
        <p>
          OneSJ is a website that points youth/young adults in San José to
          relevant mental health support options. On our website, we provide
          information on mental and physical health resources in and around the
          Bay Area, which is updated every month.
        </p>
        <FindServicesButton history={useHistory()} />
      </div>
      <img
        className="boxShadow"
        src={logo}
        style={{
          maxWidth: "65%",
          borderRadius: "25px",
          margin: "1rem",
        }}
      />
      <div
        className="infoBox center"
        style={{
          width: "90%",
        }}
      >
        <h3>LOOKING FOR OTHER RESOURCES?</h3>
        <hr />
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
          maxWidth: "65%",
          margin: "1rem",
        }}
      />
    </div>
  );
};

export default MoreInfoBanner;
