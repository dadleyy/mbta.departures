define([
], function() {

  let Header = React.createClass({

    render() {
      return (
        <div className="m-header padding-tb-12 bg-black-lighten-10">
          <div className="row">
            <div className="columns large-6">
              <h6 className="fg-white-darken-2">MBTA Departures</h6>
            </div>
          </div>
        </div>
      );
    }

  });

  return Header;

});
