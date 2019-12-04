import React, { Component } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";

import Navbar from "./navbar";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user: "",
      body: "",
      circles: []
    };

    this.circleNames = [
      "Ethics",
      "Sophism",
      "Metaphysics",
      "Religion",
      "Mortality"
    ];
  }

  componentDidMount() {
    if (this.props.location.state.loggedIn) {
      this.setState({ user: this.props.location.state.userData.name });
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
      console.log(userData);
      try {
        const res = await axios.post("/api/register", userData);

        this.setState({ loading: false, msg: "Success" });
      } catch (err) {
        console.log(err);
        this.setState({ loading: false, msg: "Registration Failed." });
      }
    }
  };

  render() {
    console.log(this.props.location);
    if (!this.props.location.state.loggedIn) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid form-container">
          <div className="card form view-component">
            <h3 className="text-center">Submit Post</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleChange("title")}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Text</label>
                <textarea
                  className="form-control"
                  id="email"
                  rows="10"
                  placeholder="Enter text"
                  value={this.state.body}
                  onChange={this.handleChange("body")}
                />
                <small id="emailHelp" className="form-text text-muted">
                  (Optional)
                </small>
              </div>
              <div className="form-select">
                <label className="form-label">Circle 1</label>
                <select className="form-control">
                  {this.circleNames.map((name, i) => (
                    <option>{name}</option>
                  ))}
                </select>
              </div>
              <div className="form-select">
                <label className="form-label">Circle 2</label>
                <select className="form-control">
                  {this.circleNames.map((name, i) => (
                    <option>{name}</option>
                  ))}
                </select>
              </div>
              <div className="form-select">
                <label className="form-label">Circle 3</label>
                <select className="form-control">
                  {this.circleNames.map((name, i) => (
                    <option>{name}</option>
                  ))}
                </select>
              </div>
              <div className="row">
                <div className="col">
                  <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                </div>
                <div className="col text-center">
                  <p className="text-right form-bottom-text">
                    <Link className="form-bottom-text" to="/">
                      Discard
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
      </React.Fragment>
    );
  }
}

export default withRouter(NewPost);
