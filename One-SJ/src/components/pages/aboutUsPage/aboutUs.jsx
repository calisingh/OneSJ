import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import AboutUsParagraph from "./aboutUsParagraph";
import BioCard from "./bioCard";
import Footer from "../../reusable/footer";
import justin from "../../../img/justin_headshot.png";
import "../../../css/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <NavigationBar />
      <div className="bgGradientTop center" style={{ gap: "5rem" }}>
        <OneSJHeader />
        <AboutUsParagraph />
      </div>
      <div
        className="bgGradientBottom center"
        style={{
          height: "150vh",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "5rem 10rem",
        }}
      >
        <BioCard
          headshot={justin}
          name="Justin Mata"
          title="Lead Software Developer"
        />
        <BioCard
          headshot={justin}
          name="Justin Mata"
          title="Lead Software Developer"
        />
        <BioCard
          headshot={justin}
          name="Justin Mata"
          title="Lead Software Developer"
        />
        <BioCard
          headshot={justin}
          name="Justin Mata"
          title="Lead Software Developer"
        />
        <BioCard
          headshot={justin}
          name="Justin Mata"
          title="Lead Software Developer"
        />
        <BioCard
          headshot={justin}
          name="Justin Mata"
          title="Lead Software Developer"
        />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
