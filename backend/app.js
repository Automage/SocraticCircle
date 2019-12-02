require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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

app.listen(8000, () => console.log("Server started on port 8000..."));

module.exports = app;
