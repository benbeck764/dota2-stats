var express = require('express'),
    request = require('request'),
    router = express.Router(),
    Enumerable = require('linq');

var  _dataServices = require('../dataLayer/statisticsServices.js');
var  _heroDataServices = require('../dataLayer/heroServices.js');

router.get('/worstversus/:id', function (req, res) {
    var id = req.params.id;

    _dataServices.getAllPlayersByHero(id, function(details) {
        var i = 0;
        var enemyIds = [];
        for(i; i < details.length; i++) {
            var isRadiance = true;
            var radiantWin = details[i].myPlayer.radiant_win;
            var player_slot = details[i].myPlayer.player_slot;
            if(player_slot > 5) {
                isRadiance = false;
            }
            var j = 0;
            for(j; j < details[i].enemyPlayers.length; j++) {
                if(isRadiance && !radiantWin) {
                    if(details[i].enemyPlayers[j].player_slot > 5) {
                        enemyIds.push(details[i].enemyPlayers[j].hero_id);
                    }
                } else if(!isRadiance && radiantWin) {
                    if(details[i].enemyPlayers[j].player_slot < 5) {
                        enemyIds.push(details[i].enemyPlayers[j].hero_id);
                    }
                }
            }
        }

        var ids = Enumerable.from(enemyIds)
            .groupBy("$", null,
            function (key, group) { return { id: key, count: group.count()} })
            .orderByDescending(function(x) { return x.count})
            .take(3)
            .toArray();

        var retList = [];
        _heroDataServices.getHeroInformation(function(hero_info) {
            var i = 0;
            for(i; i < ids.length; i++) {
                var j = 0;
                for(j; j < hero_info.length; j++) {
                    if(hero_info[j].id == ids[i].id) {
                        hero_info[j].count = ids[i].count;
                        retList.push(hero_info[j]);
                    }
                }
            }
        });
        res.send(retList);
    });
});

router.get('/bestversus/:id', function (req, res) {
    var id = req.params.id;

    _dataServices.getAllPlayersByHero(id, function(details) {
        var i = 0;
        var enemyIds = [];
        for(i; i < details.length; i++) {
            var isRadiance = true;
            var radiantWin = details[i].myPlayer.radiant_win;
            var player_slot = details[i].myPlayer.player_slot;
            if(player_slot > 5) {
                isRadiance = false;
            }
            var j = 0;
            for(j; j < details[i].enemyPlayers.length; j++) {
                if(isRadiance && radiantWin) {
                    if(details[i].enemyPlayers[j].player_slot > 5) {
                        enemyIds.push(details[i].enemyPlayers[j].hero_id);
                    }
                } else if(!isRadiance && !radiantWin) {
                    if(details[i].enemyPlayers[j].player_slot < 5) {
                        enemyIds.push(details[i].enemyPlayers[j].hero_id);
                    }
                }
            }
        }

        var ids = Enumerable.from(enemyIds)
            .groupBy("$", null,
            function (key, group) { return { id: key, count: group.count()} })
            .orderByDescending(function(x) { return x.count})
            .take(3)
            .toArray();

        var retList = [];
        _heroDataServices.getHeroInformation(function(hero_info) {
            var i = 0;
            for(i; i < ids.length; i++) {
                var j = 0;
                for(j; j < hero_info.length; j++) {
                    if(hero_info[j].id == ids[i].id) {
                        hero_info[j].count = ids[i].count;
                        retList.push(hero_info[j]);
                    }
                }
            }
        });
        res.send(retList);
    });
});

router.get('/lhdeny/:id', function (req, res) {
    var id = req.params.id;

    _dataServices.getPlayerDetailsByHero(id, function(details) {
        var i = 0;
        var lh = 0;
        var deny = 0;
        for(i; i < details.length; i++) {
            lh += details[i].last_hits;
            deny += details[i].denies;
        }
        if(details.length > 0) {
            lh = Math.round(lh / details.length);
            deny = Math.round(deny / details.length);
        }

        res.send({"lh": lh, "deny": deny});
    });
});

router.get('/permin/:id', function (req,res) {
    var id = req.params.id;

    _dataServices.getPlayerDetailsByHero(id, function(details) {
        var i = 0;
        var gpm = 0;
        var xpm = 0;
        for(i; i < details.length; i++) {
            gpm += details[i].gold_per_min;
            xpm += details[i].xp_per_min;
        }
        if(details.length > 0) {
            gpm = Math.round(gpm / details.length);
            xpm = Math.round(xpm / details.length);
        }

        res.send({"gpm": gpm, "xpm": xpm});
    });
});

router.get('/kda/:id', function (req, res) {
    var id = req.params.id;

    _dataServices.getPlayerDetailsByHero(id, function(details) {
        var i = 0;
        var kills = 0;
        var deaths = 0;
        var assists = 0;
        for(i; i < details.length; i++) {
            kills += details[i].kills;
            deaths += details[i].deaths;
            assists += details[i].assists;
        }

        if(details.length > 0) {
            kills = Math.round(kills / details.length);
            deaths = Math.round(deaths / details.length);
            assists = Math.round(assists / details.length);
        }

        res.send({"kills": kills, "deaths": deaths, "assists": assists});
    });
});

router.get('/winrate/:id', function (req,res) {
    var id = req.params.id;
    _dataServices.getPlayerDetailsByHero(id, function(details) {
        var i = 0;
        var wins = 0;
        var losses = 0;
        for(i; i < details.length; i++) {
            if((details[i].player_slot < 5 && details[i].radiant_win == true)
                || (details[i].player_slot > 5 && details[i].radiant_win == false)) {
                wins++;
            } else if((details[i].player_slot < 5 && details[i].radiant_win == false)
                || (details[i].player_slot > 5 && details[i].radiant_win == true)) {
                losses++;
            }
        }

        var winRate = 0;
        if(wins == 0 && losses == 0) {
            winRate = 0;
        } else {
            winRate = Math.round(( wins / (wins + losses)) * 100);
        }
        res.send({"wins": wins, "losses": losses, "winRate": winRate});
    });
});

module.exports = router;