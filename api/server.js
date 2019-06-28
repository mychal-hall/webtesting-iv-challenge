const express = require("express");

// Routes go here

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is online" });
});

module.exports = server;
