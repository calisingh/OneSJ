import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import FeedbackParagraph from "./feedbackParagraph";
import Footer from "../../reusable/footer";
import "../../../css/feedback.css";

const Feedback = () => {
  return (
    <>
      <NavigationBar />
      <div className="bgGradientTop center" style={{ gap: "5rem" }}>
        <OneSJHeader />
        <FeedbackParagraph />
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
