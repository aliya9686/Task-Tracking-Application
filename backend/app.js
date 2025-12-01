const express = require("express");

require("dotenv").config();
const taskRoute=require("./src/routes/taskRoute")

const app = express();
app.use(express.json());

//get all routes here
app.use("/api",taskRoute);


module.exports = app;
