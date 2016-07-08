module.exports = (config) ->

  preprocessors = "**/*.coffee": ["coffee"]
  frameworks    = ["jasmine-ajax", "jasmine"]
  browsers      = ["PhantomJS"]
  files         = [
    {pattern: "./bower_components/requirejs/require.js", included: true}
    {pattern: "./tmp/js/**/*.js", included: false}
    {pattern: "test/unit/**/*.spec.coffee", included: false}
    {pattern: "test/main.coffee", included: true}
  ]

  config.set {frameworks, browsers, files, preprocessors}
