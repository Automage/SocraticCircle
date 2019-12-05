import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import Feed from "./feed/feed";
import Navbar from "./navbar";
import TrendingTab from "./trending-tab/trendingTab";

class Panel extends Component {
  state = {
    loading: true,
    user: null,
    loggedIn: false,
    redirect: false,
    userData: null,
    msg: ""
  };

  async componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      this.setState({
        loading: false,
        loggedIn: false
      });
    } else if (this.state.loading) {
      try {
        const response = await axios.get("/api/protected", {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.setState({
          loading: false,
          loggedIn: true,
          user: jwt_decode(token, { header: true }),
          userData: response.data.userData,
          msg:
            response.data.userData.name + " | " + response.data.userData.points
        });
      } catch (error) {
        console.log(error);
        this.setState({
          loading: false,
          loggedIn: true,
          user: jwt_decode(token, { header: true }),
          msg: "The protected route failed :( Check console for errors"
        });
      }
    }
  }

  logout = e => {
    if (this.state.loggedIn) {
      e.preventDefault();
      localStorage.removeItem("jwtToken");
      this.setState({ loggedIn: false, user: null, msg: "", userData: null });
    }
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar
          onLogout={this.logout}
          loggedIn={this.state.loggedIn}
          userData={this.state.userData}
        />
        <div className="container-fluid panel">
          <div className="row">
            <Feed />
            {/* <TrendingTab /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Panel;
