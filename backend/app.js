const express = require("express");
const apiRouter = require("./routes/api");

const app = express();
// app.use("/api", apiRouter);

app.use("/", express.static("../frontend/the-socratic-circle/build"));

app.listen(8000, () => console.log("Server started on port 8000..."));

module.exports = app;
