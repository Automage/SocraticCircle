import React, { Component } from "react";

class Post extends Component {
  state = {};

  circlesData = {
    ETHICS: ["Ethics", "badge-success"],
    SOPHISM: ["Sophism", "badge-danger"],
    METAPHYSICS: ["Metaphysics", "badge-warning"],
    RELIGION: ["Religion", "badge-info"],
    MORTALITY: ["Mortality", "badge-dark"]
  };

  getCircleElements = function(circles) {
    circlesElements = [];
    tempStyle = "badge circle ";

    for (let key in circlesData) {
      if (circlesData.hasOwnProperty(key)) {
        if (circles.includes(key)) {
          tempStyle = tempStyle + circlesData[key][1];
          circlesElements.push({
            style: tempStyle,
            tag: circlesData[key][0]
          });
        }
      }
    }
  };

  render() {
    circlesElements = this.getCircleElements(this.props.post.circles);

    return (
      <div className="card post view-component">
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <h6 className="card-subtitle mb-2 post-subtitle">
            {this.props.data.author}
          </h6>
          <p className="card-text">{this.props.data.body}</p>
          <div class="row">
            <div class="col-sm-9 circle-container">
              {circlesElements.map(circle => (
                <a href="#" className={circle.style}>
                  {circle.tag}
                </a>
              ))}
            </div>
            <div className="col-sm-3">
              <div className="post-points float-right">
                {this.props.data.points}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
