import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import PrivacyParagraph from "./privacyParagraph";
import Footer from "../../reusable/footer";
import "../../../css/privacy.css";

const Privacy = () => {
  return (
    <>
      <NavigationBar />
      <div className="bgGradientTop center" style={{ gap: "5rem" }}>
        <OneSJHeader />
        <PrivacyParagraph />
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
