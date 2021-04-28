//import background from "../../../img/Black.jpg";
import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import ContactUsParagraph from "./contactUsParagraph";
import Footer from "../../reusable/footer";

const ContactUs = () => {
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
          height: "135vh",
          backgroundSize: "cover",
        }}
      >
        <OneSJHeader />
        <ContactUsParagraph />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
