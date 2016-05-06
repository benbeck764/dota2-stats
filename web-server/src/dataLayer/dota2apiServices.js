var database = require('./databaseServices');
var config = require('../../config');

var matchHistoryModelName = 'match_histories';
var matchDetailsModelName = 'match_details';

exports.addMatches = function(matches, callback){
	database.getModel(matchHistoryModelName, function(err, model) {
		var i = 0;
		for(i; i < matches.length; i++) {
			var id = matches[i].match_id;
			if(id) {
				model.update({match_id: matches[i].match_id}, matches[i], {upsert: true}, function(err){
					callback(err);
				});
			}
		}
	});
};

exports.getMatches = function(success, error) {
	database.getModel(matchHistoryModelName, function(err, model) {
		model.find({}).lean().exec(function(err, matches) {
			if(err) {
				error(err);
			} else {
				success(matches);
			}
		});
	});
};

exports.addMatchDetails = function(matchDetails, callback){
	database.getModel(matchDetailsModelName, function(err, model) {
		var id = matchDetails.match_id;
		console.log(id);
		console.log(matchDetails.players[0].ability_upgrades);
		if(id) {
			model.update({match_id: matchDetails.match_id}, matchDetails, {upsert: true}, function(err){
				callback(err);
			});
		}
	});
};