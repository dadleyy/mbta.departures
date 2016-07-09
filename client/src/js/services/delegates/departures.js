define([
], function() {

  class Departures {

    constructor() {
      this.departures = [];
    }

    load() {
      let {departures} = this;
      let deferred = Q.defer();

      setTimeout(function() {
        departures.push({name: "danny"});
        deferred.resolve(departures);
      }, 1000);

      return deferred.promise;
    }

    items() {
      let {departures} = this;
      let items = [];
      let count = departures.length;

      for(let i = 0; i < count; i++) {
        let departure = departures[i];
        let key       = departure.name;
        items.push({departure});
      }

      return items;
    }

  }

  return Departures;

});
