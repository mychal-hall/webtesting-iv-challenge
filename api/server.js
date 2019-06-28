const express = require("express");

const People = require('../people/peopleModel.js')

const server = express();
// Routes go here

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is online" });
});

module.exports = server;
