//import background from "../../../img/Black.jpg";
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
          //backgroundImage: `url(${background})`,
          display: "grid",
          gridTemplateColumns: "1fr",
          placeItems: "center",
          background:
            "linear-gradient(to bottom, rgb(0, 150, 140), rgb(250, 250, 210))",
          height: "250vh",
          backgroundSize: "cover",
        }}
      >
        <OneSJHeader />
        <PrivacyParagraph />
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
