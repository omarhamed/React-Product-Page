import React from "react";
import logo from ".././logo.svg";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            This is Header component
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
