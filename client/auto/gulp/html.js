"use strict";

const path = require("path");
const del  = require("del");
const pug  = require("gulp-pug");

module.exports = function(gulp) {

  let base = path.join(__dirname, "../../");

  gulp.task("clean:html", function() {
    return del([
      path.join(base, "dist/index.html")
    ]);
  });

  gulp.task("html", ["clean:html"], function() {
    return gulp.src(path.join(base, "src/html/index.jade"))
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest(path.join(base, "dist")));
  });

};
