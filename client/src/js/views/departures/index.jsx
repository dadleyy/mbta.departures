define([
  "components/departure_list"
], function(DepartureList) {

  function render() {
    let {resolved} = this.props;

    console.log(resolved);

    return (
      <div className="row clearfix padding-tb-20">
        <div className="columns large-12">
          <h4 className="fg-white-darken-10">Departures</h4>
          <div className="margin-top-10">
            <div className="margin-bottom-10">
              <input type="text" placeholder="Search" />
            </div>
            <DepartureList delegate={resolved.delegate} />
          </div>
        </div>
      </div>
    );
  }

  return React.createClass({render});

});
