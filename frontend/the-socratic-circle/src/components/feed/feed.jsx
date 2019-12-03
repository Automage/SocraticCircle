import React, { Component } from "react";
import Post from "./post";

class Feed extends Component {
  state = {
    posts: [
      {
        title: "Socratic views on the meaning of life",
        user: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        circles: ["SOPHISM", "METAPHYSICS"],
        points: 72
      },
      {
        title: "Bob Dylan is a poet",
        user: "Neil Young",
        body:
          "Well it ain't no use to sit and wonder why, babe\nIfin' you don't know by now\nAn' it ain't no use to sit and wonder why, babe\nIt'll never do some how\nWhen your rooster crows at the break a dawn\nLook out your window and I'll be gone\nYou're the reason I'm trav'lin' on\nDon't think twice, it's all right",
        circles: ["MORTALITY"],
        points: 19
      },
      {
        title: "Socratic views on the meaning of life",
        user: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        circles: ["RELIGION", "ETHICS", "SOPHISM"],
        points: 214
      },
      {
        title: "Socratic views on the meaning of life",
        user: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        circles: ["RELIGION", "SOPHISM"],
        points: 753
      }
    ]
  };
  render() {
    //   TODO: when re-adding TrendingTab, use colo-lg-9
    return (
      <div className="col-lg-12">
        {this.state.posts.map((post, i) => (
          <Post data={post} key={i}></Post>
        ))}
      </div>
    );
  }
}

export default Feed;
