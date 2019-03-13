import React, { Component } from "react";
import { Button } from "reactstrap";
import '../../App.css';

const logo = require('../img/colgworld.png');

class Landing extends Component {

  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
              <img src={logo} />
            <br />
            <div className="col s6">
              <Button
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Button>
            </div>
            <div className="col s6">
              <Button
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
