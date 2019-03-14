import React, { Component } from "react";
<<<<<<< HEAD
import { Button } from "reactstrap";
import '../../App.css';

const logo = require('../img/colgworld.png');
=======
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
>>>>>>> 16eaeee07a16966526e54b5ba51d9da48a905535

class Landing extends Component {

  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
<<<<<<< HEAD
              <img className="logo" src={logo} />
=======
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
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
                onClick="/login"
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
>>>>>>> 16eaeee07a16966526e54b5ba51d9da48a905535
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
