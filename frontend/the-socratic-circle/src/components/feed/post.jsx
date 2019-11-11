import React, { Component } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="card post panel-component">
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {this.props.data.author}
          </h6>
          <p className="card-text">{this.props.data.body}</p>
          <div class="row">
            <div className="col-lg-8">
              <span className="post-points">{this.props.data.points}</span>
            </div>
            <div class="col-lg-4">
              <div className="float-right">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
