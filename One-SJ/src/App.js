import React, { useState, useEffect } from "react";
import ScrollToTop from "./components/utilities/scrollToTop";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/homePage/home";
import Services from "./components/pages/servicesPage/services";
import AboutUs from "./components/pages/aboutUsPage/aboutUs";
import Disclaimer from "./components/pages/disclaimerPage/disclaimer";
import Feedback from "./components/pages/feedbackPage/feedback";
import Privacy from "./components/pages/privacyStatementPage/privacy";
import "./css/app.css";

/* Attempt at a react hook - temp */
function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}
const App = () => {
  useWindowSize();
  return (
    <>
      {/* Script for automatically scrolling to top on any page navigation */}
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/privacy-statement" component={Privacy} />
        </Switch>
      </ScrollToTop>
    </>
  );
};

export default App;
