"use strict";

const gulp    = require("gulp");
const sass    = require("gulp-sass");
const concat  = require("gulp-concat");
const rjs     = require("gulp-requirejs-optimize");
const babel   = require("gulp-babel");
const del     = require("del");
const filter  = require("gulp-filter");
const helpers = require("gulp-babel-external-helpers");
const uglify  = require("gulp-uglify");
const util    = require("gulp-util");

require("./auto/gulp/sass")(gulp);
require("./auto/gulp/js")(gulp);
require("./auto/gulp/html")(gulp);
require("./auto/gulp/watch")(gulp);

gulp.task("default", ["sass", "js", "html"]);
