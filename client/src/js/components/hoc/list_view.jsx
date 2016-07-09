define([
], function() {


  function Factory(Transclusion) {
    let displayName = "list-view";

    function render() {
      let {delegate} = this.props;

      console.log(delegate);

      return (
        <div className="clearfix">
        </div>
      )
    }

    return React.createClass({render, displayName});
  }

  return Factory;

});
