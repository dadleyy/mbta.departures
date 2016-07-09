define([
  "components/hoc/list_view"
], function(ListView) {

  function getInitialState() {
    return {};
  }

  function render() {
    let {state, props}   = this;
    let {delegate, item} = props;
    let {departure}      = item;

    return (
      <div className="clearfix departure padding-tb-10 border-bottom-1 border-color-white-darken-10">
        <p className="fg-white-darken-6">{departure.name}</p>
      </div>
    );
  }

  let ItemView = React.createClass({getInitialState, render});

  return ListView(ItemView);

});
