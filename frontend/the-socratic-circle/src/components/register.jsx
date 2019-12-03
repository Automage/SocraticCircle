import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    loading: false,
    error: ""
  };

  componentDidMount() {
    let token = localStorage.getItem("jwtToken");
    if (token) {
      console.log("token", token);
      console.log(token);
      const decoded = jwt_decode(token);
      if (decoded) {
        this.setState({ loggedIn: true });
      }
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });

    if (this.state.password != this.state.password2) {
      this.setState({ loading: false, msg: "Passwords don't match" });
    } else {
      let userData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };

      try {
        const res = await axios.post("/api/register", userData);

        this.setState({ loading: false, msg: "Registration Successful." });
      } catch (err) {
        console.log(err);
        this.setState({ loading: false, msg: "Registration Failed." });
      }
    }
  };

  render() {
    return (
      <div className="container-fluid form-container">
        <div className="card form view-component">
          <h3 className="text-center">Create New Account</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange("username")}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Password"
                value={this.state.password2}
                onChange={this.handleChange("password2")}
              />
            </div>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-outline-primary">
                  Create Account
                </button>
              </div>
              <div className="col text-center">
                <p className="text-right form-bottom-text">
                  <Link className="form-bottom-text" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
          {this.state.error && (
            <div class="alert alert-primary form-alert" role="alert">
              {this.state.error}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Register;
