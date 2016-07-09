define([
], function() {

  return React.createClass({

    render() {
      return (
        <div className="row padding-tb-20">
          <div className="columns large-6">
            <div className="margin-bottom-5">
              <h2 className="fg-white-darken-10">Welcome to MBTA Departures</h2>
            </div>
            <div className="clearfix">
              <a className="float-left margin-right-5 blue-button" href="/departures">Departures</a>
              <a className="float-left blue-button" href="/arrivals">Arrivals</a>
            </div>
          </div>
        </div>
      );
    }

  });

});
