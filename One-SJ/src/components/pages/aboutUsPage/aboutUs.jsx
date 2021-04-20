import background from "../../../img/Black.jpg";
import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import AboutUsParagraph from "./aboutUsParagraph";
import Footer from "../../reusable/footer";

const AboutUs = () => {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "150vh",
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
            <AboutUsParagraph />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
