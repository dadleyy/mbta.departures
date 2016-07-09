define([
], function() {

  function pad(x, amount) {
    let str = `${x || ""}`;
    while(str.length < amount)
      str = `0${str}`;
    return str;
  }

  return {pad};

});
