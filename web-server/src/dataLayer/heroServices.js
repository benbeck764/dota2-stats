var database = require('./databaseServices');
var _heroesTable = require('../dictionaries/heroes.json');
var config = require('../../config');

exports.getHeroInformation = function(success, error){
    var heroes_formatted = _heroesTable.heroes_formatted;
    var heroes_images = _heroesTable.heroes_images;
    var retList = [];

    var i = 1;
    for(i; i <= config.numHeroes; i++) {
        var hero = { id: null, formatted_name: null, image_name: null};
        // [i-1] since hero id starts at 1
        hero.id = heroes_formatted[i-1].id;
        hero.formatted_name = heroes_formatted[i-1].name;
        hero.image_name = heroes_images[i-1].name;
        if(hero.id != null && hero.formatted_name != null && hero.image_name != null) {
            retList.push(hero);
        }
    }
    retList.sort(function(a, b){
        if(a.formatted_name < b.formatted_name) return -1;
        if(a.formatted_name > b.formatted_name) return 1;
        return 0;
    });
    success(retList);
};