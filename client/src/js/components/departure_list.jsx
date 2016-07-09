define([
  "components/hoc/list_view"
], function(ListView) {

  function render() {
    return (
      <div className="clearfix departure">
      </div>
    );
  }

  let ItemView = React.createClass({render});

  return ListView(ItemView);

});
