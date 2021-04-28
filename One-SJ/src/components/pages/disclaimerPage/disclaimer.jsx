//import background from "../../../img/Black.jpg";
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
          //backgroundImage: `url(${background})`,
          display: "grid",
          gridTemplateColumns: "1fr",
          placeItems: "center",
          background:
            "linear-gradient(to bottom, rgb(0, 150, 140), rgb(250, 250, 210))",
          height: "210vh",
          backgroundSize: "cover",
        }}
      >
        <OneSJHeader />
        <DisclaimerParagraph />
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
