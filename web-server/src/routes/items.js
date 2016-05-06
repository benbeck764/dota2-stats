var express = require('express'),
    request = require('request'),
    router = express.Router(),
    Enumerable = require('linq');

var  _dataServices = require('../dataLayer/itemServices.js');
var  _statsDataServices = require('../dataLayer/statisticsServices.js');

router.get('/information', function (req, res) {
    _dataServices.getItemInformation(function(item_info) {
        res.send(item_info);
    });
});

router.get('/mostused/:id', function (req, res) {
    var id = req.params.id;
    var items = [];
    var retList = [];
    _statsDataServices.getPlayerDetailsByHero(id, function(details) {
        var i = 0;
        for(i; i < details.length; i++) {
            if(details[i].item_0 != 0) { items.push(details[i].item_0) };
            if(details[i].item_1 != 0) { items.push(details[i].item_1) };
            if(details[i].item_2 != 0) { items.push(details[i].item_2) };
            if(details[i].item_3 != 0) { items.push(details[i].item_3) };
            if(details[i].item_4 != 0) { items.push(details[i].item_4) };
            if(details[i].item_5 != 0) { items.push(details[i].item_5) };
        }
        var mostUsedItems = Enumerable.from(items)
            .groupBy("$", null,
            function (key, group) { return { id: key, count: group.count()} })
            .orderByDescending(function(x) { return x.count})
            .take(6)
            .toArray();

        _dataServices.getItemInformation(function(item_info) {
            for(var i = 0; i < mostUsedItems.length; i++) {
                var item = { id: mostUsedItems[i].id, formatted_name: null, image_name: null, count: mostUsedItems[i].count};
                for(var j = 0; j < item_info.length; j++) {
                    if(mostUsedItems[i].id == item_info[j].id) {
                        item.formatted_name = item_info[j].formatted_name;
                        item.image_name = item_info[j].image_name;
                    }
                }
                retList.push(item);
            }
            res.send(retList);
        });


    });
});

module.exports = router;
