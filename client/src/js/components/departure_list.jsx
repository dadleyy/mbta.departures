define([
  "components/hoc/list_view"
], function(ListView) {

  const TIME_FORMAT = "hh:mm:ss A";

  function format(time) {
    return time.format(TIME_FORMAT);
  }

  function getInitialState() {
    return {};
  }

  function toi(x) { return parseInt(x, 10); }

  function render() {
    let {state, props}   = this;
    let {delegate, item} = props;
    let {departure}      = item;
    let scheduled_time   = toi(departure.ScheduledTime) * 1000;
    let time_obj         = moment(scheduled_time);
    let lateness         = toi(departure.Lateness) / 60;
    let time_cell        = <p className="fg-white-darken-10">{format(time_obj)}</p>

    if(lateness >= 1) {
      time_cell = (
        <div className="clearfix">
          {time_cell}
          <p className="fg-white-darken-20">{lateness} minutes late</p>
        </div>
      )
    }

    return (
      <div className="list-view__item">
        <div className="row">
          <div className="columns large-3">
            <p className="fg-white-darken-6">{departure.Origin}</p>
          </div>
          <div className="columns large-3">
            <p className="fg-white-darken-6">{departure.Destination}</p>
          </div>
          <div className="columns large-1">
            <p className="fg-white-darken-10">{departure.Trip}</p>
          </div>
          <div className="columns large-2">
            <p className="fg-white-darken-10">{departure.Status}</p>
          </div>
          <div className="columns large-2">{time_cell}</div>
          <div className="columns large-1">
            <p className="fg-white-darken-10">{departure.Track}</p>
          </div>
        </div>
      </div>
    );
  }

  let ItemView = React.createClass({getInitialState, render});

  return ListView(ItemView);

});
