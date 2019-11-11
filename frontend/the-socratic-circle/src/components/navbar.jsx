import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar fixed-top view-component">
        <a class="navbar-brand mb-0 navbar-font h1" href="#">
          The Socratic Circle
        </a>
        <form>
          <button
            class="btn btn-outline-success my-2 my-sm-0 navbar-font"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
