const express = require("express");
const server = express();
const app = require("./index.ts");

server.all("*", (req, res) => {
  return app.handle(req, res);
});

module.exports = server;
