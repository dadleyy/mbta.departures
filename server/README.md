# MBTA Departures: Server-side application

This directory contains all of the code for the server-side single page application for the mbta departures "platform". It is a simple [expressjs](http://expressjs.com/) web server that will return json to the client containing data from the mbta departures csv file.

```
$ npm i
$ ./node_modules/.bin/pm2 start ./bin/departures --name "departures" -- -p 8888
```
