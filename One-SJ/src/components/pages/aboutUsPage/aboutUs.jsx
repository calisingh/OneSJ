import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import AboutUsParagraph from "./aboutUsParagraph";
import Footer from "../../reusable/footer";
import "../../../css/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <NavigationBar />
      <div className="bgGradientTop center" style={{ gap: "5rem" }}>
        <OneSJHeader />
        <AboutUsParagraph />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
