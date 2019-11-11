import React, { Component } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="card post view-component">
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <h6 className="card-subtitle mb-2 post-subtitle">
            {this.props.data.author}
          </h6>
          <p className="card-text">{this.props.data.body}</p>
          <div class="row">
            <div class="col-sm circle-container">
              <a href="#" class="badge badge-success circle">
                Ethics
              </a>
              <a href="#" class="badge badge-danger circle">
                Sophism
              </a>
              <a href="#" class="badge badge-warning circle">
                Metaphysics
              </a>
              <a href="#" class="badge badge-info circle">
                Religion
              </a>
              <a href="#" class="badge badge-dark circle">
                Mortality
              </a>
            </div>
            <div className="col-sm">
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
