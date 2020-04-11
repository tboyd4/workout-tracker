// variable and import declarations
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const Exercise = require("./models/workouts");
const app = express();
const PORT = process.env.PORT || 8080;

// middleware expressions
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
  useNewUrlParser: true,
});

// routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

// listen command
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
