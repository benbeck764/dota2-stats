var database = require('./databaseServices');
var config = require('../../config');
var _accountId = config.account_id;

var matchDetailsModelName = 'match_details';

exports.getGPMChartData = function(id, success, error){
    database.getModel(matchDetailsModelName, function(err, model) {
        model.find
        ({
            players: {$elemMatch: {account_id: _accountId, hero_id: id}}
        })
            .lean().exec(function(err, matches) {
                if(err) {
                    error(err);
                } else {
                    var retList = [];
                    for(var i = 0; i < matches.length; i++) {
                        var players = matches[i].players;
                        for(var j = 0; j < players.length; j++) {
                            if(players[j].account_id = _accountId
                                    && players[j].hero_id == id) {
                                var data = { time: null, gpm: null };
                                data.time = matches[i].start_time;
                                data.gpm = players[j].gold_per_min;
                                retList.push(data);
                            }
                        }
                    }
                    success(retList)
                }
            });
    });
};