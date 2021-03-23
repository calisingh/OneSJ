import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ServicesComponent from "./components/servicesComponent";
import AngelasComponent from "./components/angelas-component";
import KunsComponent from "./components/kuns-component";
import Home from "./components/home";

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Route path="/services" component={ServicesComponent} />
          <Route path="/angelas-component" component={AngelasComponent} />
          <Route path="/kuns-component" component={KunsComponent} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
