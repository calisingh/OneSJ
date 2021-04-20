import ScrollToTop from "./components/utilities/scrollToTop";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/homePage/home";
import Services from "./components/pages/servicesPage/services";
import AboutUs from "./components/pages/aboutUsPage/aboutUs";
import Disclaimer from "./components/pages/disclaimerPage/disclaimer";
import ContactUs from "./components/pages/contactUsPage/contactUs";
import Privacy from "./components/pages/privacyStatementPage/privacy";

const App = () => {
  return (
    <>
      {/* Script for automatically scrolling to top on any page navigation */}
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/privacy-statement" component={Privacy} />
        </Switch>
      </ScrollToTop>
    </>
  );
};

export default App;
