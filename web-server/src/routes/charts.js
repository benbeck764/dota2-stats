var express = require('express'),
    request = require('request'),
    router = express.Router()

var  _dataServices = require('../dataLayer/chartsServices.js');

router.get('/gpm/:id', function (req, res) {

    var id = req.params.id;

    _dataServices.getGPMChartData(id, function(chart_data) {
        res.send(chart_data);
    });
});

module.exports = router;
