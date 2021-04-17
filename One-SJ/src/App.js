import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ServicesComponent from "./components/servicesComponent";
import AboutUsComponent from "./components/aboutUs";
import Home from "./components/home";
import ScrollToTop from "./components/utilities/scrollToTop";
import Disclaimer from "./components/disclaimer";
import ContactUs from "./components/contactUs";
import Privacy from "./components/privacy";

export default class App extends Component {
  render() {
    return (
      <div>
        <ScrollToTop>
          <Switch>
            <Route path="/services" component={ServicesComponent} />
            <Route path="/aboutUs" component={AboutUsComponent} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/" exact component={Home} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}
