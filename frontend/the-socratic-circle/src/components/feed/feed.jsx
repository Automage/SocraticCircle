import React, { Component } from "react";
import Post from "./post";

class Feed extends Component {
  state = {
    posts: [
      {
        title: "Socratic views on the meaning of life",
        author: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        points: 50
      },
      {
        title: "Bob Dylan is a poet",
        author: "Neil Young",
        body:
          "Well it ain't no use to sit and wonder why, babe\nIfin' you don't know by now\nAn' it ain't no use to sit and wonder why, babe\nIt'll never do some how\nWhen your rooster crows at the break a dawn\nLook out your window and I'll be gone\nYou're the reason I'm trav'lin' on\nDon't think twice, it's all right",
        points: 10
      },
      {
        title: "Socratic views on the meaning of life",
        author: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        points: 50
      },
      {
        title: "Socratic views on the meaning of life",
        author: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        points: 50
      },
      {
        title: "Socratic views on the meaning of life",
        author: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        points: 50
      },
      {
        title: "Socratic views on the meaning of life",
        author: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        points: 50
      },
      {
        title: "Socratic views on the meaning of life",
        author: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        points: 50
      },
      {
        title: "Socratic views on the meaning of life",
        author: "Pranav Nair",
        body:
          "I'll just nod, I've never been so good at shaking hands\n I live on the frozen surface of a fireball\n Where cities come together to hate each other in the name of sport\nAmerica, nothing is ever just anything\nI looked up to you, but you thought I would look the other way\nAnd you hear what you want to hear\nAnd they take what they want to take\nDon't be sad, won't ever happen like this anymore",
        points: 50
      }
    ]
  };
  render() {
    return (
      <div className="col-lg-8">
        {this.state.posts.map(post => (
          <Post data={post}></Post>
        ))}
      </div>
    );
  }
}

export default Feed;
