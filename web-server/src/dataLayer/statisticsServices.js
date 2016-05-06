var database = require('./databaseServices');
var config = require('../../config');
var _accountId = config.account_id;

var matchHistoryModelName = 'match_histories';
var matchDetailsModelName = 'match_details';

//set up the model for the match_history collection
database.createModel(matchHistoryModelName, config.matchHistorySchema);
database.createModel(matchDetailsModelName, config.matchDetailsSchema);

exports.getPlayerDetailsByHero = function(id, success, error){
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
                            players[j].radiant_win = matches[i].radiant_win;
                            retList.push(players[j]);
                        }
                    }
                }
                success(retList)
            }
        });
    });
};

exports.getAllPlayersByHero = function(id, success, error) {
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
                        var details = {myPlayer: null, enemyPlayers: []};
                        var players = matches[i].players;
                        for(var j = 0; j < players.length; j++) {
                            if(players[j].account_id = _accountId
                                    && players[j].hero_id == id) {
                                players[j].radiant_win = matches[i].radiant_win;
                                details.myPlayer = players[j];
                            } else {
                                details.enemyPlayers.push(players[j]);
                            }
                        }
                        retList.push(details);
                    }
                    success(retList)
                }
            });
    });
};