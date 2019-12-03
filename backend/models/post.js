const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  body: {
    type: String,
    trim: true,
    required: true
  },
  circles: {
    type: String,
    enum: ["ETHICS", "SOPHISM", "METAPHYSICS", "RELIGION", "MORTALITY"]
  },
  points: {
    type: Number,
    default: 0,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Post", postSchema);
