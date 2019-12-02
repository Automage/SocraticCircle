const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  author: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    required: true
  },
  body: {
    type: String,
    trim: true,
    required: true
  },
  points: {
    type: Number,
    default: 0,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Post", postSchema);
