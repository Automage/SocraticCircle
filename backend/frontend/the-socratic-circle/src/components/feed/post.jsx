import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.circlesData = {
      ETHICS: ["Ethics", "badge-success"],
      SOPHISM: ["Sophism", "badge-danger"],
      METAPHYSICS: ["Metaphysics", "badge-warning"],
      RELIGION: ["Religion", "badge-info"],
      MORTALITY: ["Mortality", "badge-dark"]
    };
  }

  getCircleElements = circles => {
    let circlesElements = [];
    let commonStyle = "badge circle ";

    for (let key in this.circlesData) {
      if (this.circlesData.hasOwnProperty(key)) {
        if (circles.includes(key)) {
          let tempStyle = commonStyle + this.circlesData[key][1];
          circlesElements.push({
            style: tempStyle,
            tag: this.circlesData[key][0]
          });
        }
      }
    }

    return circlesElements;
  };

  render() {
    let circlesElements = this.getCircleElements(this.props.data.circles);

    return (
      <div className="card post view-component">
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <h6 className="card-subtitle mb-2 post-subtitle">
            {this.props.data.user}
          </h6>
          <p className="card-text">{this.props.data.body}</p>
          <div className="d-flex justify-content-between">
            <div className="circle-container">
              {circlesElements.map((circle, i) => (
                <Link to="/home" className={circle.style} key={i}>
                  {circle.tag}
                </Link>
              ))}
            </div>
            <div className="">
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
