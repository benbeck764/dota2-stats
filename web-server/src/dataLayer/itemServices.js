var database = require('./databaseServices');
var _itemsTable = require('../dictionaries/items.json');
var config = require('../../config');

exports.getItemInformation = function(success, error){
    var items_formatted = _itemsTable.items_formatted;
    var items_images = _itemsTable.items_images;
    var retList = [];

    var i = 0;
    for(i; i < items_formatted.length; i++) {
        var item = { id: null, formatted_name: null, image_name: null};
        item.id = items_formatted[i].id;
        item.formatted_name = items_formatted[i].name;
        var j = 0;
        for(j; j < items_images.length; j++) {
            if(items_images[j].id == item.id) {
                item.image_name = items_images[j].name;
                break;
            }
        }
        if(item.id != null && item.formatted_name != null && item.image_name != null) {
            retList.push(item);
        }
    }

    success(retList);
};