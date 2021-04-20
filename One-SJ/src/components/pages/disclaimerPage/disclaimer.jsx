import background from "../../../img/Black.jpg";
import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import DisclaimerParagraph from "./disclaimerParagraph";
import Footer from "../../reusable/footer";

const Disclaimer = () => {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "160vh",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            height: "50%",
          }}
        >
          <OneSJHeader />
          <div
            style={{
              position: "absolute",
              width: "100%",
              marginTop: "10%",
            }}
          >
            <DisclaimerParagraph />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
