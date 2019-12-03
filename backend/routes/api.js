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
  Post.find({}, err => {
    if (err) console.log(err);
  })
    .populate("user")
    .exec((err, post) => {
      if (err) res.send("Failure");
      else res.send(post);
    });
});

router.get("/posts/:id", (req, res) => {
  Post.findOne({ _id: req.params.id }, (err, post) => {
    if (err) res.send("Failure");
    if (!post) res.sendStatus(404);
    else res.send(post);
  })
    .populate("user")
    .exec((err, post) => {
      if (err) res.send("Failure");
      else res.send(post);
    });
});

router.post("/posts/", (req, res) => {
  // Date is added automatically
  Post.insertMany(
    {
      title: req.body.title,
      user: req.body.user,
      body: req.body.body,
      circles: req.body.circles,
      points: req.body.points
    },
    err => {
      if (err) res.send("Failure");
      else res.send("Success");
    }
  );
});

router.put("/posts/:id", (req, res) => {
  let fail = false;
  Post.findById(req.params.id, (err, post) => {
    if (err) console.log(err);
    if (!post) {
      res.sendStatus(404);
    } else {
      Post.updateOne({ _id: req.params.id }, req.body, (err, post) => {
        if (err) {
          console.log(err);
          res.send("Failure");
        }
      });
    }
    res.send("Success");
  });
});

router.delete("/posts/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id, (err, post) => {
    if (err) {
      res.send("Failure");
    } else if (!post) {
      res.sendStatus(404);
    } else {
      res.send("Success");
    }
  });
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
  User.insertMany({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    points: 0
  })
    .then(user => console.log("inserted: " + user))
    .catch(e => console.log(e));
  res.send("Success");
});

router.put("/users/:id", (req, res) => {
  let fail = false;
  User.findById(req.params.id, (err, user) => {
    if (err) console.log(err);
    if (!user) {
      res.sendStatus(404);
    } else {
      User.updateOne({ _id: req.params.id }, req.body, (err, user) => {
        if (err) {
          console.log(err);
          res.send("Failure");
        }
      });
    }
    res.send("Success");
  });
});

router.delete("/users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) {
      res.send("Failure");
    } else if (!user) {
      res.sendStatus(404);
    } else {
      res.send("Success");
    }
  });
});

module.exports = router;
