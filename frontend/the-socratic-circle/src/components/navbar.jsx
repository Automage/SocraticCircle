import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-light view-component">
        <Link to="/#">
          <p
            className="navbar-brand mb-0 navbar-font h1"
            id="navbar-title"
            // href="#"
          >
            The Socratic Circle
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {/* Just to move search to the right side */}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" />

          <form className="form-inline my-2 my-lg-0">
            <Link to="/login">
              <button
                className="btn btn-outline-primary my-2 my-sm-1 ml-2 navbar-font"
                type="submit"
              >
                Login
              </button>
            </Link>
            <button
              className="btn btn-outline-primary my-2 my-sm-1 ml-2 navbar-font"
              type="submit"
            >
              New Post
            </button>
            <button
              className="btn btn-outline-primary my-2 my-sm-1 ml-2 navbar-font"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
