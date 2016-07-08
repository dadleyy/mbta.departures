do ->

  {__karma__} = window
  {files} = __karma__
  tests   = []
  noop    = ->

  # override karma loaded so requirejs can take controll
  __karma__.loaded = noop

  # load in all of the test modules that are found
  for file, hash of files
    tests.push file if /\.spec/i.test file

  start = ->
    __karma__.start()

  require tests, start
