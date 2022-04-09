const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

const { db } = require("./configureDB");
const {
  listSport,
  sportById,
  createSport,
  updateSport,
  deleteSport,
} = require("./controllers/sports");
const { listStudent, createStudent } = require("./controllers/students");

const logger = require("./middleware/logger");
app.use(logger);

app.use(bodyParser.json());

//sports routes
app.get("/sports", (req, res) => {
  listSport(req, res, db);
});
app.get("/sports/:id", (req, res) => {
  sportById(req, res, db);
});
app.post("/sports", (req, res) => {
  createSport(req, res, db);
});
app.put("/sports/:id", (req, res) => {
  updateSport(req, res, db);
});
app.delete("/sports/:id", (req, res) => {
  deleteSport(req, res, db);
});

//students routes
app.get("/students", (req, res) => {
  listStudent(req, res, db);
});
app.post("/students", (req, res) => {
  createStudent(req, res, db);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
