/** Module Dependencies **/
var express = require('express')
	, bodyParser = require('body-parser');


/** CORS Middleware (Allows Client to Talk to This) **/
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
	
/** Set Express Settings **/
var app = express();
app.use(bodyParser());
app.use(allowCrossDomain);

/**routes! */
var charts = require('./routes/charts.js');
var matches = require('./routes/matches.js');
var statistics = require('./routes/statistics.js');
var items = require('./routes/items.js');
var heroes = require('./routes/heroes.js');
var dota2api  = require('./routes/dota2api.js');
var router = express.Router();

app.use('/api/dota2api/', dota2api);
app.use('/api/charts/', charts);
app.use('/api/matches/', matches);
app.use('/api/statistics/', statistics);
app.use('/api/items/', items);
app.use('/api/heroes/', heroes);
app.use('/api/', router);

/** Start the Express Sever **/
var server = app.listen(45101, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('DotA2Mean listening at http://%s:%s', host, port);
});
