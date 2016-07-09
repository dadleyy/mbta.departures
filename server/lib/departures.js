"use strict";

const bluebird = require("bluebird");
const http     = require("http");
const csvparse = require("csv-parse");

const DATA_URL = "http://developer.mbta.com/lib/gtrtfs/Departures.csv"

// not a fan of bluebirds interface, so prefer creating an object with
// the promise, resolve and reject functions.
function defer() {
  let deferred = {};

  deferred.promise = new bluebird(function(res, rej) {
    deferred.resolve = res;
    deferred.reject = rej;
  });

  return deferred;
}

function load() {
  let deferred = defer();
  let response = new Buffer(0);

  function receive(data) {
    response = Buffer.concat([response, data]);
  }

  function parsed(err, result) {
    if(err) return deferred.reject(err);
    deferred.resolve(result);
  }

  function finish() {
    csvparse(response, {columns: true}, parsed);
  }

  function connected(res) {
    if(res.statusCode !== 200) {
      let e = new Error(`Invalid status code received from mbta data source: ${res.statusCode}`);
      return deferred.reject(e);
    }

    res.on("data", receive);
    res.on("end", finish);
  }

  let request = http.get(DATA_URL, connected)
    .on("error", deferred.reject);

  return deferred.promise;
}

module.exports = {load};
