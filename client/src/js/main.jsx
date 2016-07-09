require([
  "routes",
  "components/header"
], function(routes, Header) {

  let header_container = document.getElementById("header");

  // route
  //
  // @param {object} definition - an object with `resolve`, `view` and `path` properties
  function route(definition) {
    let {view, resolve, path} = definition;

    function handler() {
    }

    return handler;
  }

  // bind all of the routes provided by the routes module
  for(let count = routes.length, i = 0; i < count; i++) {
    let r = routes[i];
    let {path} = r;
    page(path, route(r));
  }

  page({popstate: true, click: true});

  ReactDOM.render(<Header />, header_container);

});
