define([
  "services/delegates/departures"
], function(Departures) {

  function resolve() {
    let deferred = Q.defer();
    let delegate = new Departures();

    function success() {
      deferred.resolve({delegate});
    }

    function error(e) {
      console.error(e);
      return deferred.reject(500);
    }

    delegate.load()
      .then(success)
      .catch(error);

    return deferred.promise;
  }

  let view = "views/departures/index";
  let path = "/departures";


  return {view, path, resolve};

});
