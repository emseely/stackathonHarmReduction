const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const port = process.env.PORT || 3000;

const app = express();

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === "test";
app.use(volleyball.custom({ debug }));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "..", "src")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "src/index.html"));
  if (err) {
    res.status(500).send(err);
  }
}); // Send index.html for any other requests

app.use("/api", require("./api")); // include our routes!

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../src/index.html"));
// }); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
