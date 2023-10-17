require("dotenv").config;

const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`));

module.exports = app;
