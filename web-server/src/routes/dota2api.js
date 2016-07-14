var express = require('express'),
    request = require('request'),
    config = require('../../config'),
    router = express.Router()

var _dataServices = require('../dataLayer/dota2apiServices.js');
var _devKey = "F99837D4DF07828F1C85C71700B0F9BD";
var _accountId = "111871881";
var _numHeroes = config.numHeroes;
var _format = "JSON";
var _language = "en";
var _matchHistoryUri = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v001/";
var _matchDetailsUri = "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v001/";


router.get('/GetMatchHistory', function (req, res) {
  var heroId = 1;
  for(heroId; heroId <= _numHeroes; heroId++) {
      var apiUri = _matchHistoryUri + "?key=" + _devKey + "&account_id=" + _accountId + "&format=" + _format + "&hero_id=" + heroId;
      request(apiUri, function(error, response, body) {
         if(!error && response.statusCode == 200) {
             var json = JSON.parse(body);
             var matches = json.result.matches;
             _dataServices.addMatches(matches, function(err) {
                 if(err) {
                     //res.sendStatus(500);
                 } else {
                     //res.sendStatus(200);
                 }

             });
         } else {
             //res.sendStatus(500);
         }
      });
  }
});

router.get('/GetMatchDetails', function(req, res) {
    _dataServices.getMatches(function(matches) {
        var i = 0;
        for(i; i < matches.length; i++) {
            var apiUri = _matchDetailsUri + "?key=" + _devKey + "&match_id=" + matches[i].match_id + "&format=" + _format;
            request(apiUri, function(error, response, body) {
                if(!error && response.statusCode == 200) {
                   var json = JSON.parse(body);
                   var matchDetails = json.result;
                     _dataServices.addMatchDetails(matchDetails, function(err) {
                        if(err) { /*res.sendStatus(500);*/ }
                    });
                } else {
                   //res.sendStatus(500);
               }
            });
        }
    }, function(err) {
        //res.sendStatus(500);
    })

});

module.exports = router;
