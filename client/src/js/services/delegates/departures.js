define([
], function() {

  class Departures {

    constructor() {
    }

    items() {
      let deferred = Q.defer();

      setTimeout(function() {
        deferred.resolve([]);
      }, 2000);

      return deferred.promise;
    }

  }

  return Departures;

});
