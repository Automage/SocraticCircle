import React, { Component } from "react";
import Feed from "./feed/feed";
import TrendingTab from "./trending-tab/trendingTab";

class Panel extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid panel">
        <div className="row">
          <Feed />
          {/* <TrendingTab /> */}
        </div>
      </div>
    );
  }
}

export default Panel;
