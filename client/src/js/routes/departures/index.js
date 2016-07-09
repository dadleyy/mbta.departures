define([
], function() {

  function resolve() {
    let deferred = Q.defer();

    setTimeout(function() {
      deferred.resolve({});
    }, 1500);

    return deferred.promise;
  }

  let view = "views/departures/index";
  let path = "/departures";


  return {view, path, resolve};

});
