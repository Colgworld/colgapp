import React, { Component } from "react";
import { Button } from "reactstrap";
import '../../App.css';

const logo = require('../img/colgworld.png');

class Landing extends Component {

  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
              <img className="logo" src={logo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
