var express = require('express'),
    request = require('request'),
    router = express.Router()

var  _dataServices = require('../dataLayer/matchServices.js');
var  _itemServices = require('../dataLayer/itemServices.js');
var _abilitiesTable = require('../dictionaries/abilities.json').abilities_images;
var _gameTypesTable = require('../dictionaries/game_types.json').game_types;

router.get('/:id', function (req, res) {
    var id = req.params.id;
    var retList = [];
    _dataServices.getMatchDetailsByHero(id, function(details) {
        var i = 0;
        for(i; i < details.length; i++) {
            var detail = {results: null, mode: null, kda: null, duration: null, items: [], abilities: null};
            // RESULTS
            if((details[i].player_slot < 5 && details[i].radiant_win == true)
                || (details[i].player_slot > 5 && details[i].radiant_win == false)) {
                detail.results = "Win";
            } else if((details[i].player_slot < 5 && details[i].radiant_win == false)
                || (details[i].player_slot > 5 && details[i].radiant_win == true)) {
                detail.results = "Loss";
            }
            // TYPE
            var j = 0;
            for(j; j < _gameTypesTable.length; j++) {
                if(_gameTypesTable[j].id == details[i].game_mode) {
                    detail.mode = _gameTypesTable[j].type;
                }
            }

            if(detail.mode == null) {
                detail.mode = "-";
            }
            //KDA
            detail.kda = details[i].kills + "/" + details[i].deaths + "/" + details[i].assists;
            //DURATION
            detail.duration = msToTime(details[i].duration);
            //ITEMS
            _itemServices.getItemInformation(function(item_info) {
                var k = 0;
                for(k; k < item_info.length; k++) {
                    if(details[i].item_0 == item_info[k].id ||
                        details[i].item_1 == item_info[k].id ||
                        details[i].item_2 == item_info[k].id ||
                        details[i].item_3 == item_info[k].id ||
                        details[i].item_4 == item_info[k].id ||
                        details[i].item_5 == item_info[k].id )
                    {
                        detail.items.push(item_info[k]);
                    }
                }

                // ABILITIES
                var l = 0;
                for(l; l < _abilitiesTable.length; l++) {
                    var m = 0;
                    for(m; m < details[i].ability_upgrades.length; m++) {
                        if(_abilitiesTable[l].id == details[i].ability_upgrades[m].ability) {
                            details[i].ability_upgrades[m].image_name = _abilitiesTable[l].name;
                        }
                    }
                }
                detail.abilities = details[i].ability_upgrades;
            });

            retList.push(detail);
        }
        res.send(retList);
    });
});

function msToTime(d) {
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    if(h>0) {
        return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
    } else {2
        return (m + ":" + (s < 10 ? "0" : "") + s);
    }
}

module.exports = router;