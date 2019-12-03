require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");

const apiRouter = require("./routes/api");
const app = express();

// MongoDB connection

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

// Routing

app.use(bodyParser.json());
app.use("/", express.static("../frontend/the-socratic-circle/build"));
app.use("/api", apiRouter);
// Handle any other requests (could change to specify /login and /register)
// For now there is only a single point of entry - index.html
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/../frontend/the-socratic-circle/build/index.html")
  );
});

app.listen(8000, () => console.log("Server started on port 8000..."));

module.exports = app;
