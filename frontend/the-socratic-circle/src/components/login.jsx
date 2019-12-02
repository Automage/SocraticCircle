import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};

  handleSubmit = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="container-fluid form-container">
        <div className="card form view-component">
          <h3 className="text-center">Login</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-outline-primary">
                  Login
                </button>
              </div>
              <div className="col text-center">
                <p className="text-right form-bottom-text">
                  <Link className="form-bottom-text" to="/register">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
