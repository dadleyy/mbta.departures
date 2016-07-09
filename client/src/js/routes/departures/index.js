define([
], function() {

  function resolve() {
    let deferred = Q.defer();
    return deferred.promise;
  }

  let view = "views/departures/index";
  let path = "/departures";


  return {view, path, resolve};

});
