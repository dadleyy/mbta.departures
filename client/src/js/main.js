require([
  "components/header"
], function(Header) {

  let header_container = document.getElementById("header");

  ReactDOM.render(<Header />, header_container);

});
