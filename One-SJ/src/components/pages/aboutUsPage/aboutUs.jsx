//import background from "../../../img/Black.jpg";
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
          display: "grid",
          gridTemplateColumns: "1fr",
          placeItems: "center",
          background:
            "linear-gradient(to bottom, rgb(0, 150, 140), rgb(250, 250, 210))",
          height: "180vh",
          backgroundSize: "cover",
        }}
      >
        <OneSJHeader />
        <AboutUsParagraph />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
