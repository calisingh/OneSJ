import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import ContactUsParagraph from "./contactUsParagraph";
import Footer from "../../reusable/footer";
import "../../../css/contactUs.css";

const ContactUs = () => {
  return (
    <>
      <NavigationBar />
      <div className="bgGradientTop center" style={{ gap: "5rem" }}>
        <OneSJHeader />
        <ContactUsParagraph />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
