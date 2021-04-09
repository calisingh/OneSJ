import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ServicesComponent from "./components/servicesComponent";
import AboutUsComponent from "./components/aboutUs";
//import AngelasComponent from "./components/angelas-component";
//import NewComponent from "./components/kuns-component";
import Home from "./components/home";
import ScrollToTop from "./components/utilities/scrollToTop";
import Disclaimer from "./components/disclaimer";
import ContactUs from "./components/contactUs";

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <ScrollToTop>
          <Switch>
            <Route path="/services" component={ServicesComponent} />
            <Route path="/aboutUs" component={AboutUsComponent} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/contactUs" component={ContactUs} />
            {/*<Route path="/angelas-component" component={AngelasComponent} />
            {/* <Route path="/kuns-component" component={NewComponent} /> */}
            <Route path="/" exact component={Home} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}
