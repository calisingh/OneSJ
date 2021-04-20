import background from "../../../img/Black.jpg";
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
          backgroundImage: `url(${background})`,
          height: "110vh",
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
            <ContactUsParagraph />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
