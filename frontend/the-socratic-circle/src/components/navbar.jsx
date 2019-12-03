import React, { Component } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Navbar extends Component {
  state = {
    loading: true,
    user: null,
    loggedIn: false
  };

  async componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    console.log("TOKEN: " + token);
    if (!token) {
      this.setState({
        loading: false,
        loggedIn: false
      });
      return;
    } else if (this.state.loading) {
      try {
        this.setState({
          loading: false,
          loggedIn: true,
          user: jwt_decode(token, { header: true })
        });
      } catch (error) {
        console.log(error);
        this.setState({
          loading: false,
          loggedIn: true,
          user: jwt_decode(token, { header: true })
        });
      }
    }
  }

  logout = e => {
    if (this.state.loggedIn) {
      e.preventDefault();
      localStorage.removeItem("jwtToken");
      this.setState({ loggedIn: false });
    }
  };

  render() {
    console.log(this.state);
    let loginMsg = "Login";
    let loginLink = "/login";
    if (this.state.loggedIn) {
      loginMsg = "Logout";
      loginLink = "/";
    }

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
            {this.state.loggedIn && (
              <label className="h6 navbar-font">{this.state.user}</label>
            )}
            <Link to={loginLink}>
              <button
                className="btn btn-outline-primary my-2 my-sm-1 ml-2 navbar-font"
                type="submit"
                onClick={this.logout}
              >
                {loginMsg}
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
