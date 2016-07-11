# MBTA Departures: Browser-side application

This directory contains all of the code for the browser-side single page application for the mbta departures "platform".

# Building

This application is compiled using the [gulp](http://gulpjs.com/) build system, including tasks for compiling [react](https://facebook.github.io/react/) jsx files using [babel](https://babeljs.io/).

### Prerequisites

Before compiling, a `.env` file should be created at the base of this directory that contains information sentive to the environment you're working with.

If you're using the `devserver` utility (see below), this file should look like:

```env
API_HOME="/api"
```

### Compilation steps

```
$ npm i
$ bower i
$ npm run build:debug
```

# Devserver

For convenience, the `./bin/devserver` executable has been provided that will open an http server and proxy the `/api` path to the location of the api. All other requests (asside from asset files) will be provided the compiled `index.html` file.
