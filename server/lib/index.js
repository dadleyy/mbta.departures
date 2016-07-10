"use strict";

const express    = require("express");
const bluebird   = require("bluebird");
const cors       = require("cors");
const departures = require("./departures");

function start(options) {
  let port = options.port || 8888;
  let app  = express();

  app.use(cors());

  app.get("/departures", function(req, res) {
    let meta = {timestamp: new Date().getTime()};

    res.set("Access-Control-Allow-Origin", "*");

    departures.load().then(function(data) {
      let response = {data, meta};
      return res.json(response);
    });
  });

  app.listen(port);
  process.stdout.write(`started server on port ${port}`);
}

module.exports = {start};
