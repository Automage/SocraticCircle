const express = require("express");
const router = express.Router();

// MongoDB models

const User = require("../models/user");
const Post = require("../models/post");

// Login / Registration routes

router.get("/login", (req, res) => {
  res.send("Login");
});

// Post data routes

// Get all posts
router.get("/posts/", (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) console.log(err);
    res.send(posts);
  });
});

router.get("/posts/:id", (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) console.log(err);
    if (post) {
      res.send(post);
    } else {
      res.sendStatus(404);
    }
  });
});

router.post("/posts/", (req, res) => {
  res.send("Post post ");
});

router.put("/posts/:id", (req, res) => {
  res.send("put post " + req.params.id);
});

router.delete("/posts/:id", (req, res) => {
  res.send("Delete post " + req.params.id);
});

// User data routes

// Get all users
router.get("/users/", async (req, res) => {
  User.find({}, (err, users) => {
    if (err) console.log(err);
    res.send(users);
  });
});

router.get("/users/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) console.log(err);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(404);
    }
  });
});

router.post("/users/", (req, res) => {
  res.send("Post user ");
});

router.put("/users/:id", (req, res) => {
  res.send("put user " + req.params.id);
});

router.delete("/users/:id", (req, res) => {
  res.send("Delete user " + req.params.id);
});

module.exports = router;
