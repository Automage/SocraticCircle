import React, { Component } from "react";
import Feed from "./feed/feed";
import Navbar from "./navbar";
import TrendingTab from "./trending-tab/trendingTab";

class Panel extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
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
