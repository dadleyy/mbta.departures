define([
], function() {

  function resolve() {
    return Q.reject(true);
  }

  view = "views/missing";
  path = "*"

  return {resolve, view, path};

});
