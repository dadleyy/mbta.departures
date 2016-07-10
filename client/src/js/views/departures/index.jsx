define([
  "services/uuid",
  "components/departure_list"
], function(Uuid, DepartureList) {

  let displayName = "departures-index-view";

  function getInitialState() {
    return {loading: false, load_id: "empty"};
  }

  function search(event) {
    let {state}        = this;
    let {delegate}     = this.props.resolved;
    let {value: query} = event.target;
    let load_id        = Uuid();

    function finish() {
      let {state} = this;

      // prevent old requests from triggering a render before newer ones
      if(state.load_id !== load_id)
        return false;

      // update our loading flag which will cause a re-render
      this.setState({loading: false});
    }

    function failed(e) {
      this.setState({loading: false});
    }

    // load in the new items from the delegate
    delegate.load({query})
      .then(finish.bind(this))
      .catch(failed.bind(this));

    // trigger re-render knowing that we are in the middle of a load
    this.setState({
      load_id: load_id, 
      loading: true
    });
  }

  let Loading = React.createClass({
    render() {
      return (
        <div className="clearfix border-1 border-color-white-darken-6 padding-10">
          <p className="fg-white-darken-6">Loading...</p>
        </div>
      )
    }
  });

  function render() {
    let {resolved} = this.props;
    let {loading}  = this.state;
    let child      = <DepartureList delegate={resolved.delegate} />

    if(loading)
      child = <Loading />


    return (
      <div className="row clearfix padding-tb-20">
        <div className="columns large-12">
          <h4 className="fg-white-darken-10">Departures</h4>
          <div className="margin-top-10">
            <div className="clearfix">
              <div className="padding-tb-10 padding-lr-15">
                <div className="row">
                  <div className="columns large-3">
                    <p className="fg-white-darken-6">Origin</p>
                  </div>
                  <div className="columns large-3">
                    <p className="fg-white-darken-6">Destination</p>
                  </div>
                  <div className="columns large-1">
                    <p className="fg-white-darken-10">Trip</p>
                  </div>
                  <div className="columns large-2">
                    <p className="fg-white-darken-10">Status</p>
                  </div>
                  <div className="columns large-2">
                    <p className="fg-white-darken-10">Scheduled Time</p>
                  </div>
                  <div className="columns large-1">
                    <p className="fg-white-darken-10">Track</p>
                  </div>
                </div>
              </div>
              <div className="clearfix">{child}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return React.createClass({displayName, getInitialState, render, search});

});
