//babel polyfill ES6
require('babel-core/register')();

const express = require('express'),
  app = express(),
  // port = process.env.PORT || 3010;
  bodyParser = require('body-parser');
  
var http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/iGlobalizationRoutes');
routes(app);

// app.listen(port);
const port = 3010;

http.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
