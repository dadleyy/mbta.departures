"use strict";

const path  = require("path");

module.exports = function(gulp) {

  const base     = path.join(__dirname, "../../");
  const js_dir   = path.join(base, "src/js/**/*.js");
  const sass_dir = path.join(base, "src/sass/**/*.sass");
  const html_dir = path.join(base, "src/html/**/*.jade");

  gulp.task("watch", ["default"], function() {
    gulp.watch(js_dir, ["js"]);
    gulp.watch(html_dir, ["html"]);
    return gulp.watch(sass_dir, ["sass"]);
  });

};
