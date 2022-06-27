import React, { Component } from "react";
import logo from ".././logo.svg";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "click the subscribe button to get any new",
    };

    this.changMessge = this.changMessge.bind(this);
  }

  changMessge() {
    this.setState(
      {
        message: "Thank you for subscribe",
      },
      () => {
        console.log("Hello From Footer");
      }
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
              <img
                src={logo}
                alt=""
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              <button
                className="btn btn-primary me-3"
                onClick={this.changMessge}
              >
                Subscribe
              </button>
              <span>{this.state.message}</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
