const express = require("express");
const cors = require("cors");
require("dotenv").config();

const taskRoute = require("./src/routes/taskRoute");

const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.use("/api/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

module.exports = app;
