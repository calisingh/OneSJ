import background from "../../../img/Black.jpg";
import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import PrivacyParagraph from "./privacyParagraph";
import Footer from "../../reusable/footer";

const Privacy = () => {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "230vh",
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
            <PrivacyParagraph />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
