require([
  "routes",
  "router",
  "components/header"
], function(routes, router, Header) {

  let header_container = document.getElementById("header");

  ReactDOM.render(<Header />, header_container);
  router.init(routes);

});
