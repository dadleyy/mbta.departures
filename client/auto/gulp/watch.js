"use strict";

const path  = require("path");

module.exports = function(gulp) {

  const base     = path.join(__dirname, "../../");
  const js_dir   = path.join(base, "src/js");
  const sass_dir = path.join(base, "src/sass/**/*.sass");
  const html_dir = path.join(base, "src/html/**/*.jade");

  gulp.task("watch", ["default"], function() {
    gulp.watch([
      path.join(js_dir, "**/*.js"),
      path.join(js_dir, "**/*.jsx")
    ], ["js"]);
    gulp.watch(html_dir, ["html"]);
    return gulp.watch(sass_dir, ["sass"]);
  });

};
