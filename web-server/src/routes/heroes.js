var express = require('express'),
    request = require('request'),
    router = express.Router()

var  _dataServices = require('../dataLayer/heroServices.js');

router.get('/information', function (req, res) {
    _dataServices.getHeroInformation(function(hero_info) {
       res.send(hero_info);
    });
});

module.exports = router;
