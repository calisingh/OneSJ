import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/justins-component">Justins-Component</Link>
        </li>
        <li>
          <Link to="/angelas-component">Angelas-Component</Link>
        </li>
        <li>
          <Link to="/kuns-component">Kuns-Component</Link>
        </li>
      </ul>
    );
  }
}
