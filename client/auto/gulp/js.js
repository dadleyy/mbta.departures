"use strict";

const path   = require("path");
const del    = require("del");
const concat = require("gulp-concat");

module.exports = function(gulp) {

  const base   = path.join(__dirname, "../../");
  const bundle = path.join(base, "dist/assets/vendors/bundle.js");

  let vendors = [
    path.join(base, "bower_components/q/q.js"),
    path.join(base, "bower_components/page/page.js"),
    path.join(base, "bower_components/react/react.js"),
    path.join(base, "bower_components/requirejs/require.js")
  ];

  gulp.task("clean:js", function() {
    return del([bundle]);
  });

  gulp.task("js:vendors", function() {
    return gulp.src(vendors)
      .pipe(concat("bundle.js"))
      .pipe(gulp.dest(path.dirname(bundle)));
  });

  gulp.task("js", ["js:vendors", "clean:js"], function() {
  });

};
